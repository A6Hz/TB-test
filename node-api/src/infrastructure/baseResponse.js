module.exports = class BaseResponse {
  localResponse

  constructor (response) {
    this.localResponse = response
  }

  ok (data) {
    return this.localResponse.status(200).json(data)
  }

  error (error) {
    console.log(error)
    this.localResponse.statusCode = 500
    this.localResponse.statusMessage = JSON.stringify(error)
    return this.localResponse.send()
  }
}
