"use strict";

/**
 * test2 controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::test2.test2');

module.exports = createCoreController("api::test2.test2", ({ strapi }) => ({
  // Method 1: Creating an entirely custom action
  async find(ctx) {
    const sanitizedQueryParams = await this.sanitizeQuery(ctx);
    const { results, pagination } = await strapi
      .service("api::test2.test2")
      .find(sanitizedQueryParams);
    const sanitizedResults = await this.sanitizeOutput(results, ctx);

    return {'some text'}
    // this.transformResponse(sanitizedResults, { pagination });
  },
}));
