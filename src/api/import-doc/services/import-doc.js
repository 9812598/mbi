'use strict';

/**
 * import-doc service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::import-doc.import-doc');
