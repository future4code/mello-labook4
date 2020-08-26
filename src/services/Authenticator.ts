import * as jwt from 'jsonwebtoken'

export interface AuthenticationData {
  id: string
}

export default abstract class Authenticator {

  static generateToken(input: AuthenticationData) {
    return jwt.sign(
      input,
      process.env.JWT_KEY as string
    )
  }

  static getTokenData(token: string): AuthenticationData {
    const tokenData = jwt.verify(
      token,
      process.env.JWT_KEY as string
    )
    return tokenData as AuthenticationData
  }
}