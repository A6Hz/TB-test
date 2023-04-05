const axiosInstance = require("../../shared/axiosInstance");
const LineEntity = require("../../core/entities/lines.entity");
const FileEntity = require("../../core/entities/file.entity");

module.exports = class GetParsedFileListUseCase {
  async execute() {
    const result = await axiosInstance.get("/files");

    const promises = result.data.files.map((fileName) =>
      axiosInstance.get(`/file/${fileName}`)
    );

    const settledPromises = await Promise.allSettled(promises);

    const files = [];
    for (const promise of settledPromises) {
      if (promise.status === "rejected") continue;

      const fileName = promise.value.request.path.match(/(\w+).csv$/g)[0];

      files.push(
        new FileEntity({
          file: fileName,
          lines: this.parseCSV(promise.value.data),
        })
      );
    }

    return files;
  }

  parseCSV(csv) {
    const parsedItems = [];

    const splitedRows = csv.split("\n");

    for (const row of splitedRows) {
      if (row === "file,text,number,hex") continue;

      const columns = row.split(",");

      const payload = new LineEntity({
        text: columns[1],
        number: columns[2],
        hex: columns[3],
      });

      if (!payload.text || !payload.number || !payload.hex) continue;

      parsedItems.push(payload);
    }

    return parsedItems;
  }
};
