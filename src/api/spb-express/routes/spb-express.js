'use strict';

/**
 * spb-express router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::spb-express.spb-express');
