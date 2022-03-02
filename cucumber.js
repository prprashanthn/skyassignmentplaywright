const common = `
  --require runner/hooks.js 
  --require Support/*steps.js
  --publish-quiet
  `;

module.exports = {
  default: `${common} Feature/**/*.feature`
};