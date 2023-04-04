export class FileEntity {
  constructor(body) {
    if (body) Object.assign(this, body);
  }

  file;

  lines = [];
}
