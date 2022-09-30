import { config as envConfig } from 'dotenv'
import { config, list } from '@keystone-6/core'
import { text } from '@keystone-6/core/fields'

envConfig()

export default config({
    db: {
        provider: 'mysql',
        url: process.env.DB_URL,
    },
    lists: {
        User: list({
            fields: {
                name: text({ validation: { isRequired: true } }),
                email: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
            },
        }),
    }
});