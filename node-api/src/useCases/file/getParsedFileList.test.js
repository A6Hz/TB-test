const expect = require("chai").expect;
const GetParsedFileListUseCase = require("./getParsedFileList.useCase");

describe("Testing getParsedFileList use case", () => {
  it("1. Get batch file list", async () => {
    const useCase = new GetParsedFileListUseCase();
    const result = await useCase.execute();

    expect(result).to.be.an("array");
    expect(result[0]).to.haveOwnProperty("file");
    expect(result[0]).to.haveOwnProperty("lines");
    expect(result).to.have.lengthOf.above(3);
  });

  it("2. Get one file", async () => {
    const useCase = new GetParsedFileListUseCase();
    const result = await useCase.execute("test18.csv");

    expect(result).to.be.an("array");
    expect(result[0]).to.haveOwnProperty("file");
    expect(result[0]).to.haveOwnProperty("lines");
    expect(result).to.have.lengthOf(1);
  });
});
