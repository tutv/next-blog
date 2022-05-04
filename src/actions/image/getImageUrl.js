const notion = require('../../connections/notion')


export default async (id) => {
    const {image} = await notion.blocks.retrieve({block_id: id})
    const {file} = Object.assign({}, image)
    const {url} = Object.assign({}, file)

    return url
}

