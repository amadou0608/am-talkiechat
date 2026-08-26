import jwt from 'jsonwebtoken'
import { env } from '../env'

export interface SessionPayload {
  userId: string
}

export function signSession(payload: SessionPayload): string {
  return jwt.sign(payload, env.jwtSecret, { expiresIn: env.jwtExpiresIn })
}

export function verifySession(token: string): SessionPayload | null {
  try {
    return jwt.verify(token, env.jwtSecret) as SessionPayload
  } catch {
    return null
  }
}
