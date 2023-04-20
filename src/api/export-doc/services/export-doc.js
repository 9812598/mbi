'use strict';

/**
 * export-doc service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::export-doc.export-doc');
