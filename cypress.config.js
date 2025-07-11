const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "7nfdiz",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporter: 'mochawesome',
     reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss",
     }
  },
});
