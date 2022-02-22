/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

const cucumber = require('cypress-cucumber-preprocessor').default
var randomstring = require('randomstring');

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
const {exec, spawn} = require('child_process');
const fs_extra = require('fs-extra');
const path = require('path');
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('file:preprocessor', cucumber())

  const file = config.env.configFile || 'prod';
  return getConfigurationByFile(file);
}

function getConfigurationByFile(file){
  const pathToConfigFile = path.resolve(
    '././',
    'cypress/config',
    `cypress_${file}.json`
  );
  console.log('Config file: ' + file);
  return fs_extra.readJson(pathToConfigFile);
}