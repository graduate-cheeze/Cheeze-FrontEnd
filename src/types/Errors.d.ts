interface Errors {
  [baseUrl: string]: {
    [url: string]: {
      [method: string]: {
        [status: number]: string
        '*'?: string
      }
    }
  }
}
