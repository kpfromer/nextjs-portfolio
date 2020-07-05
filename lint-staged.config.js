module.exports = {
  './src/**/*.(js|md|mdx)': ['prettier --write'],
  './src/**/*.(js|jsx|ts|tsx)': ['yarn typecheck', 'eslint --fix']
};
