const needsTokenRefreshData = [
  { url: '/auth', method: 'POST' },
  { url: '/auth/signin', method: 'POST' },
]

/**
 * 토큰 재발급 체크를 해야하는 요청인지 검사하는 메소드입니다
 * true가 나오면 재발급 요청이 필요합니다
 */
const needsTokenRefresh = (url?: string, method?: string): boolean => {
  if (!url || !method) return false

  return !needsTokenRefreshData.filter(
    (data) => url.includes(data.url) && method.toUpperCase() === data.method
  )[0]
}

export default needsTokenRefresh
