/**
 *  The main reason for doing this is to manage our environment variables in one place.
 *  For some reason, we may decide to have multiple .env files. For instance, we may decide to have a separate .env for deployment with docker.
 *  We may also have other configuration variables. We would like to manage these variables efficiently that’s why we are following this convention.
 */

'use strict';
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    DB_USER: process.env.DB_USER,
    DB_KEY: process.env.DB_PASS
};

