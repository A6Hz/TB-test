export class FileEntity {
  constructor(body) {
    if (body) Object.assign(this, body);
  }

  fileName;

  text;

  number;

  hex;
}
