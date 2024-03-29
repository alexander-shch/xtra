module.exports = {
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  transformIgnorePatterns: ['/node_modules/(?!@fullcalendar/*).+\\.[t|j]sx?$'],
};
