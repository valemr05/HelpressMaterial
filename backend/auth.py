import hashlib
import secrets
from fastapi import HTTPException, status
from sqlalchemy.orm import Session
import models

# Almacenamiento de sesiones activas (en memoria)
active_sessions = {}

def hash_password(password: str) -> str:
    """Hashea la contraseña usando SHA-256"""
    salt = "helpress_salt_2024"
    return hashlib.sha256((password + salt).encode()).hexdigest()

def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Verifica si la contraseña coincide con el hash"""
    return hash_password(plain_password) == hashed_password

def create_session_token(email: str) -> str:
    """Genera un token de sesión único"""
    token = secrets.token_urlsafe(32)
    active_sessions[token] = email
    return token

def get_user_from_token(token: str, db: Session):
    """Obtiene el usuario desde el token de sesión"""
    email = active_sessions.get(token)
    if not email:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Sesión inválida o expirada"
        )
    
    user = db.query(models.User).filter(models.User.email == email).first()
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Usuario no encontrado"
        )
    
    return user

def logout_session(token: str):
    """Elimina la sesión activa"""
    if token in active_sessions:
        del active_sessions[token]
