const { defineConfig } = require("cypress");
// Section 57 : Video 225
const fs = require('fs-extra');
const path = require('path');

function getConfigurationByFile(file) {
  // we want to store config file in the following location : cypress\\config' , whatever stating.json or prod.json , etc..
  const pathToConfigFile = path.resolve('cypress\\config', `${file}.json`);
  // Add if the cutsom file is not exit print this msg
  if(!fs.existsSync(pathToConfigFile)) {
    console.log("No custom config file found.")
    // if it is found return it and read it
    return{};
  }

  return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  projectId: 'kz32o4',
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      // section : 57 -video 225
    
        // if this config file exists return the next if not do nothing
        const file = config.env.configFile || ''
      
        return getConfigurationByFile(file)
      

    },
    
    // following setting to include all our files with the following extensions 
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    // to exclude any file regardless the name of the file with the extension js under folder other and we can exclude all our files 
    // excludeSpecPattern: "cypress/e2e/**/*.js",
    //excludeSpecPattern: "cypress/e2e/other/*.js",
    // set chrome secturity to false to can handle the 2 super domains in the same test
    chromeWebSecurity: false,
    // experimentalSessionAndOrigin: true --> this removed starting from V12.0
    //experimentalModifyObstructiveThirdPartyCode : true

    // to resolve blank page after running cypress tests 
   // testIsolation: false,

    defaultCommandTimeout: 10000,
    //pageLoadTimeout: 120000,

    // Setcion 51 - Screenshots *****
    screenshotOnRunFailure : true,
    // Add the otheroption that will clear the screenshots folder before the cypress run commnand
    trashAssetsBeforeRuns :true,

    // vide 207 - recoding videos - 1 will be jhhigh quality with high resources and 51 vice verse
    videoCompression: 32,
    // if we set video recoding to false it will not take videos
    video: false,

    // section 47 - Global env variable 
    env: {
      first_name: "Sarah",
      // section 47 - video 191 set the URL as an env variable
      webdriveruni_homepage: "https://www.webdriveruniversity.com/"
    },
    // section 47 - Video 190 Add baseUrl 
    baseUrl : "https://www.webdriveruniversity.com/",

    // section 52 - video 208 configure size and orientation of the page on global level
    viewportHeight :2080,
    viewportWidth: 2920,

    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json',
    },
    // Section 58 - Video 228 - Retry logic 

    retries: {

      // Add runMode 
      runMode :0,
      //add open mode 
      openMode : 2


    }

  },

});