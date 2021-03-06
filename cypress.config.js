const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    animationDistanceThreshold: 5,
    arch: "x64",
    baseUrl: "https://espeo.eu/",

    browsers: [
      {
        name: "chrome",
        family: "chromium",
        channel: "stable",
        displayName: "Chrome",
        version: "103.0.5060.114",
        path: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        minSupportedVersion: 64,
        majorVersion: 103,
      },
      {
        name: "electron",
        channel: "stable",
        family: "chromium",
        displayName: "Electron",
        version: "100.0.4896.160",
        path: "",
        majorVersion: 100,
        info: "Electron is the default browser that comes with Cypress. This is the default browser that runs in headless mode. Selecting this browser is useful when debugging. The version number indicates the underlying Chromium version that Electron uses.",
      },
    ],
    chromeWebSecurity: true,
    clientCertificates: [],
    defaultCommandTimeout: 4000,
    downloadsFolder: "cypress/downloads",
    env: {},
    excludeSpecPattern: "*.hot-update.js",
    execTimeout: 60000,
    experimentalFetchPolyfill: false,
    experimentalInteractiveRunEvents: false,
    experimentalSessionAndOrigin: false,
    experimentalSourceRewriting: false,
    fileServerFolder: "",
    fixturesFolder: "cypress/fixtures",
    hosts: null,
    includeShadowDom: false,
    isInteractive: true,
    keystrokeDelay: 0,
    modifyObstructiveCode: true,
    numTestsKeptInMemory: 50,
    pageLoadTimeout: 60000,
    platform: "darwin",
    port: null,
    projectId: null,
    redirectionLimit: 20,
    reporter: "spec",
    reporterOptions: null,
    requestTimeout: 5000,
    resolvedNodePath: null,
    resolvedNodeVersion: null,
    responseTimeout: 30000,
    retries: {
      runMode: 0,
      openMode: 0,
    },
    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/screenshots",
    scrollBehavior: "top",
    slowTestThreshold: 10000,
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.{js,jsx,ts,tsx}",
    supportFolder: false,
    taskTimeout: 60000,
    trashAssetsBeforeRuns: true,
    userAgent: null,
    video: true,
    videoCompression: 32,
    videosFolder: "cypress/videos",
    videoUploadOnPasses: true,
    viewportHeight: 660,
    viewportWidth: 1000,
    waitForAnimations: true,
    watchForFileChanges: true,
  },
})
