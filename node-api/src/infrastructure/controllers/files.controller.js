const express = require("express");
const BaseResponse = require("../baseResponse");
const GetParsedFileListUseCase = require("../../useCases/file/getParsedFileList.useCase");
const GetFileListUseCase = require("../../useCases/file/getFileList.useCase");
const router = express.Router();

router.get("/data", async (req, res) => {
  const response = new BaseResponse(res);

  try {
    const result = await new GetParsedFileListUseCase().execute(
      req.query.fileName
    );
    return response.ok(result);
  } catch (error) {
    return response.error(error);
  }
});

router.get("/list", async (req, res) => {
  const response = new BaseResponse(res);

  try {
    const result = await new GetFileListUseCase().execute();
    return response.ok(result);
  } catch (error) {
    return response.error(error);
  }
});

module.exports = router;
