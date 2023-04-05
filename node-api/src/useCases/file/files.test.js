const expect = require('chai').expect
const GetFileListUseCase = require('./getFileList.useCase')

describe('Testing GetFileList use case', () => {
  it('1. Get a file name list', async () => {
    const useCase = new GetFileListUseCase()
    const result = await useCase.execute()

    expect(result).to.haveOwnProperty('files')
    expect(result.files).to.be.an('array')
  })
})
