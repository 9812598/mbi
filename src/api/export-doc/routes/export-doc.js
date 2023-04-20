'use strict';

/**
 * export-doc router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::export-doc.export-doc');
