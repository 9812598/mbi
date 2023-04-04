'use strict';

/**
 * spb-express service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::spb-express.spb-express');
