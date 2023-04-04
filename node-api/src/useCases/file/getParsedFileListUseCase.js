const axios = require("axios").default;
const LineEntity = require("../../core/entities/lines.entity");
const FileEntity = require("../../core/entities/file.entity");

module.exports = class GetParsedFileListUseCase {
  axiosInstance = axios.create({
    baseURL: "https://echo-serv.tbxnet.com/v1/secret/",
    headers: { Authorization: "Bearer aSuperSecretKey" },
  });

  async execute() {
    const result = await this.axiosInstance.get(`/files`);

    const promises = result.data.files.map((fileName) =>
      this.axiosInstance.get(`/file/${fileName}`)
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
