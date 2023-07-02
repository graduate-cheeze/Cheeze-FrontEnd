import observable from '@api/lib/observable'
import reissue from '@api/services/reissue'
import ReissueResType from '@api/type/ReissueResType'
import TokenName from './TokenName'

class TokenManager {
  accessToken: string | null = null
  refreshToken: string | null = null
  accessTokenExp: Date | null = null
  refreshTokenExp: Date | null = null

  constructor() {
    this.setTokenFromLocalStorage()
  }

  static setToken(tokens: ReissueResType) {
    localStorage.setItem(TokenName.ACCESS_TOKEN, tokens.accessToken)
    localStorage.setItem(TokenName.REFRESH_TOKEN, tokens.refreshToken)
    localStorage.setItem(TokenName.ACCESS_TOKEN_EXP, tokens.accessExp)
    localStorage.setItem(TokenName.REFRESH_TOKEN_EXP, tokens.refreshExp)
  }

  static clearToken() {
    localStorage.removeItem(TokenName.ACCESS_TOKEN)
    localStorage.removeItem(TokenName.REFRESH_TOKEN)
    localStorage.removeItem(TokenName.ACCESS_TOKEN_EXP)
    localStorage.removeItem(TokenName.REFRESH_TOKEN_EXP)
  }

  setTokenFromLocalStorage() {
    if (typeof window === 'undefined') return

    this.accessToken = localStorage.getItem(TokenName.ACCESS_TOKEN)
    this.refreshToken = localStorage.getItem(TokenName.REFRESH_TOKEN)
    this.accessTokenExp = new Date(
      localStorage.getItem(TokenName.ACCESS_TOKEN_EXP) || ''
    )
    this.refreshTokenExp = new Date(
      localStorage.getItem(TokenName.REFRESH_TOKEN_EXP) || ''
    )
  }

  async reissueToken(): Promise<boolean> {
    if (
      !this.accessToken ||
      !this.refreshToken ||
      !this.accessTokenExp ||
      !this.refreshTokenExp
    ) {
      this.setTokenFromLocalStorage()
      return true
    }

    const oneMinuteLater = this.getOneMinuteLater()
    if (
      this.accessTokenExp <= oneMinuteLater &&
      this.refreshTokenExp <= oneMinuteLater
    ) {
      TokenManager.clearToken()
      return true
    }

    if (
      this.accessTokenExp > oneMinuteLater ||
      this.refreshTokenExp <= oneMinuteLater
    )
      return true

    if (observable.observers.length) {
      return new Promise<boolean>((resolve) => {
        observable.setOvserver(resolve)
      })
    }

    observable.setOvserver((_value) => {})
    const data = await reissue(this.refreshToken)

    if (!data) {
      observable.notifyAll(false)
      return false
    }

    observable.notifyAll(true)
    TokenManager.setToken(data)

    return true
  }

  getOneMinuteLater(): Date {
    const oneMinuteAgo = new Date()
    oneMinuteAgo.setMinutes(oneMinuteAgo.getMinutes() + 1)
    return oneMinuteAgo
  }
}

export default TokenManager
