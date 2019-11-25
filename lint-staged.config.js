module.exports = {
  './src/**/*.(js|md)': ['prettier --write', 'git add'],
  './src/**/*.(js)': ['eslint --fix', 'git add']
};
