const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'h2vqdj',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
