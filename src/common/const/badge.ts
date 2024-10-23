import { BadgeAuthType } from '../types/badge'

export const BADGE: Record<string, BadgeAuthType> = {
  EMAIL: 'email',
  FILE: 'file',
  BLOCKCHAIN: 'blockchain',
  LOGIN: 'login',
}

Object.freeze(BADGE)
