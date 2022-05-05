const notion = require('../../connections/notion')
const {getModel} = require('../../connections/database')


export default async (id) => {
    const Post = getModel('Post')
    const post = await Post.findOne({_id: id}).select('source_id').lean()

    if (!post) throw new Error('Post not found')

    const {source_id} = post
    const defaultUrl = 'https://www.notion.so/images/page-cover/woodcuts_10.jpg'
    const {cover} = await notion.pages.retrieve({page_id: source_id})
    const {type} = Object.assign({}, cover)
    const {url} = Object.assign({}, cover[type])

    return url || defaultUrl
}

