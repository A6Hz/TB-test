const express = require('express')
const BaseResponse = require('../baseResponse')
const GetParsedFileListUseCase = require('../../useCases/file/getParsedFileListUseCase')
const router = express.Router()

router.get('/data', async (req, res) => {
  const response = new BaseResponse(res)

  try {
    const result = await new GetParsedFileListUseCase().execute()
    return response.ok(result)
  } catch (error) {
    return response.error(error)
  }
})

module.exports = router
