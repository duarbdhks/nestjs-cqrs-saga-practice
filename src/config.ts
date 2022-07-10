const { env: ENV } = process

export const config = {
  port: ENV.PORT || 3000,
}
