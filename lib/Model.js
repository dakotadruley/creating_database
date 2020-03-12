// const path = require('path');
const uuid = require('uuid/v4');
// creates ids
const {
  mkdirp,
  writeJSON,
  //   readDirectoryJSON, 
  //   readJSON,
  updateJSON,
//   deleteFile
} = require('./FileSystem.js');

class Model {
  constructor(modelName, schema) {
    this.modelName = modelName;
    this.schema = schema;
    mkdirp(this.modelName);
  }

  create(obj) {
    const _id = uuid();
    const validated = this.schema.validate(obj);
    return writeJSON(`${this.modelName}/${_id}`, { ...validated, _id });
  }

  findByIdAndUpdate(id, patchObj) {
    return updateJSON(`${this.modelName}/${id}`, patchObj);
  }
    
}

module.exports = { Model };
