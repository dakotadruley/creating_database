// const {} from 
const fs = require('fs').promises;

jest.mock('fs', () => ({
  // mocks the get function and intersects it 
  writeFile() {
    return Promise.resolve({ body: 'stringified object' });
  }
}));

describe('FileSystem', () => {
  afterEach(() => {
    fs.unlink('./tbd.js');
  });
  it('mkdirp', () => {
    expect();
  });

  it('writeJSON', () => {
    fs.writeFile('./README-copy.md', data, err => {
      console.log('done copying');
    });
  });

  it('readJSON', () => {

  });

  it('readDirectoryJSON', () => {

  });

  it('updateJSON', () => {

  });

  it('deleteFile', () => {

  });

});
