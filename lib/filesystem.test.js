// const {} from 
const fs = require('fs').promises;

const {
  mkdirp,
  writeJSON,
  readJSON,
  readDirectoryJSON,
  updateJSON,
  deleteFile
} = require('./FileSystem');

// updated
jest.mock('fs', () => ({
  // mocks the get function and intersects it 
  promises: {
    mkdir: jest.fn(() => Promise.resolve()),
    writeFile: jest.fn(() => Promise.resolve()),
    readFile: jest.fn(() => Promise.resolve('{"name":"spot}')),
    readdir: jest.fn(() => Promise.resolve(['test.json', 'test2.json'])),
    unlink: jest.fn(() => Promise.resolve())
  }
}));

describe('FileSystem', () => {
  it('mkdirp', () => {
    return mkdirp('./my/cool/directory/path')
      .then(() => {
        expect(fs.mkdir)
          .toHaveBeenCalledWith('./my/cool/directory/path', { recursive: true });
      });
  });

  it('writeJSON', () => {
    const dog = {
      name: 'spot',
      age: 5,
      weight: '20 lbs'
    };

    return writeJSON('./test.json', dog) 
      .then(() => {
        expect(fs.writeFile).toHaveBeenCalledWith('./test.json', JSON.stringify(dog));
      });
  });

  it('readJSON', () => {
    return readJSON('./test.json').then(data => {
      expect(fs.readFile).toHaveBeenCalledWith('./test.json');
      expect(data).toEqual({ name: 'spot' });
    });
  });

  it('readDirectoryJSON', () => {
    return readDirectoryJSON('./data').then(data => {
      expect(fs.readdir).toHaveBeenCalledWith('./data');
      expect(fs.readFile).toHaveBeenCalledWith('./data/test/json');
      expect(fs.readFile).toHaveBeenCalledWith('./data/test2.json');
      expect(data).toEqual([{ name: 'spot' }, { name: 'spot' }]);
    });
  });

  it('updateJSON', () => {
    return updateJSON('./test.json', { name: 'rover' }).then(data => {
      expect(fs.readFile).toHaveBeenCalledWith('./test.json');
      expect(fs.writeFile).toHaveBeenCalledWith('./test.json', '{"name":"rover"}');
      expect(data).toEqual({ name: 'rover' });
    });
  });

  it('deleteFile', () => {
    return deleteFile('./test.json').then(() => {
      expect(fs.unlick).toHaveBeenCalledWith('./test.json');
    });
  });
});
