const fs = require('fs').promises;

// mkdirp - make a directory and all parent directories
const mkdirp = path => {
  return fs.mkdir(path, { recursive: true });
};

// writeJSON - write an object to a file
const writeJSON = (path, obj) => {
  return fs.writeFile(path, JSON.stringify(obj)).then(() => obj);
};

// readJSON - read an object from a file
const readJSON = path => {
  return fs.readFile(path).then(contents => JSON.parse(contents));
};

// readDirectoryJSON - read all files in a directory as objects
const readDirectoryJSON = path => {
  return fs.readdir(path).then(files => {
    return Promise.all(files.map(file => readJSON(`${path}/${file}`)));
  });
};

// updateJSON - update a files JSON
const updateJSON = (path, obj) => {
  return readJSON(path).then(json => {
    //  spread operator
    const updatedJSON = { ...json, ...obj };
    return writeJSON(path, updatedJSON);
  });
};

// deleteFile - delete a file
const deleteFile = path => fs.unlink(path);

module.exports = {
  mkdirp,
  writeJSON,
  readJSON,
  readDirectoryJSON,
  updateJSON,
  deleteFile
};
