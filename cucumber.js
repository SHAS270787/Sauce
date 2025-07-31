module.exports = {
  default: [
    '--require-module ts-node/register',
    '--require Src/Features/step_definitions/**/*.ts',
    'Src/Features/**/*.feature',
    '--format progress'
  ].join(' ')
};