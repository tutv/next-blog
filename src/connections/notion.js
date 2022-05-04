const {Client} = require('@notionhq/client')


const notionKey = process.env.NOTION_API_KEY || ''
console.log("Notion key:", notionKey)
const notion = new Client({auth: notionKey})

module.exports = notion

