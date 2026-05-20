import type { User } from './user.type'
import type { ResponseApi } from './utils.type'

//Chứa các interface về auth
export type AuthResponse = ResponseApi<{
  access_token: string
  expires: string
  user: User
}>
