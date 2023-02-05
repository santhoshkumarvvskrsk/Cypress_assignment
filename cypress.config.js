const { defineConfig } = require("cypress");
const createEsbuildPlugin =
  require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;
  const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
  const nodePolyfills =
  require('@esbuild-plugins/node-modules-polyfill').NodeModulesPolyfillPlugin;
  const addCucumberPreprocessorPlugin =
  require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  env:{
    username:'santhosh',
    passwords:'santos@537'
  },
  e2e: {
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      await addCucumberPreprocessorPlugin(on, config);
      on(
        'file:preprocessor',
        createBundler({
          plugins: [nodePolyfills(), createEsbuildPlugin(config)],
        })
      )
      return config
    },
    specPattern: ["**/RegisterUser.feature","**/Login.feature","**/RequestQuotation.feature","**/RetriveQuotation.feature","**/EditProfileLogOut.feature","cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"]
    // specPattern: ["**/RegisterUser.feature","**/LoginSuccess.feature", "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"]
  },
});
