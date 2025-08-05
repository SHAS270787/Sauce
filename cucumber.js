module.exports = {
  default: {
    require: [
      'ts-node/register',
      'Src/Features/step_definitions/*.ts',
      'Src/Features/support/hooks.ts',
    ],
    format: ['progress'],
  },
};
