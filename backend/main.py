#pip install fastapi uvicorn sqlalchemy pydantic
from fastapi import FastAPI, Depends, HTTPException, status, Header
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

import models
import schemas
from database import engine, get_db
from auth import (
    hash_password,
    verify_password,
    create_session_token,
    get_user_from_token,
    logout_session
)

# Crear las tablas en la base de datos
models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Helpress API")

# Configuración CORS para Angular
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Helpress API is running"}

@app.post("/register", status_code=status.HTTP_201_CREATED)
def register(user: schemas.UserCreate, db: Session = Depends(get_db)):
    # Verificar si el email ya existe
    existing_user = db.query(models.User).filter(models.User.email == user.email).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="El email ya está registrado")
    
    # Crear nuevo usuario
    new_user = models.User(
        full_name=user.full_name,
        email=user.email,
        hashed_password=hash_password(user.password)
    )
    
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    
    return {
        "message": "Usuario creado exitosamente",
        "user": {
            "id": new_user.id,
            "email": new_user.email,
            "full_name": new_user.full_name
        }
    }

@app.post("/login")
def login(credentials: schemas.UserLogin, db: Session = Depends(get_db)):
    # Buscar usuario por email
    user = db.query(models.User).filter(models.User.email == credentials.email).first()
    
    # Verificar credenciales
    if not user or not verify_password(credentials.password, user.hashed_password):
        raise HTTPException(status_code=400, detail="Credenciales incorrectas")
    
    # Crear token de sesión
    token = create_session_token(user.email)
    
    return {
        "access_token": token,
        "token_type": "bearer",
        "user": {
            "id": user.id,
            "full_name": user.full_name,
            "email": user.email
        }
    }

@app.post("/logout")
def logout(authorization: str = Header(None)):
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Token no proporcionado")
    
    token = authorization.split(" ")[1]
    logout_session(token)
    
    return {"message": "Sesión cerrada exitosamente"}

@app.get("/me")
def get_current_user(authorization: str = Header(None), db: Session = Depends(get_db)):
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="No autenticado")
    
    token = authorization.split(" ")[1]
    user = get_user_from_token(token, db)
    
    return {
        "id": user.id,
        "full_name": user.full_name,
        "email": user.email
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)