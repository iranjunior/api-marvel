module.exports = (path) => {
  if (path.includes('/')) {
    return {
      id: path.substring(0, path.indexOf('/')),
      paths: path.split('/').shift(),
    };
  }

  return {
    id: path,
    paths: [],
  };
};
