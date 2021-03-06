'use strict';

const env = process.env.NODE_ENV;
const path = require('path')

console.log('Loading environment:', env.toUpperCase());

const config = {
    production: {
        root: path.resolve(__dirname, '../../../'),
        mongo: {
            uri: 'mongodb://localhost/warehouse-production',
            options: {
                useMongoClient: true
            }
        },
        port: process.env.PORT || 9999,
        seedDB: false
    },
    development: {
        root: path.resolve(__dirname, '../../../'),
        mongo: {
            uri: 'mongodb://localhost/warehouse-development',
            options: {
                useMongoClient: true
            }
        },
        port: process.env.PORT || 9999,
        seedDB: false
    },
    test: {
        root: path.resolve(__dirname, '../../../'),
        mongo: {
            uri: 'mongodb://localhost/warehouse-test',
            options: {
                useMongoClient: true
            }
        },
        port: process.env.PORT || 9999,
        seedDB: false
    }
}

module.exports = config[env];