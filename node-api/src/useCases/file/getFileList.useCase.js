const axiosInstance = require('../../shared/axiosInstance')

module.exports = class GetFileListUseCase {
  async execute () {
    const result = await axiosInstance.get('/files')

    return result.data
  }
}
