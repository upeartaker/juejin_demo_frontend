interface ResponseShape<T> {
  success: boolean
  result: T
  code: string | number
  messageArgs: any
  message: string
}

type ApiShape<T extends object, R> = (
  payload: T,
  headers?: any
) => Promise<ResponseShape<R>>

type ApiMethod = 'POST' | 'GET' | 'DELETE' | 'PUT' | 'PATCH'
