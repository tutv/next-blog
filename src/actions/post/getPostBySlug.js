const {getModel} = require('../../connections/database')


export default async (slug) => {
    const Post = getModel('Post')
    const Category = getModel('Category')
    const vSlug = (slug || '').trim().toLowerCase()
    const post = await Post
        .findOne({slug: vSlug})
        .populate({
            path: 'category',
            model: Category,
            select: 'name slug'
        })
        .lean()

    if (!post) {
        throw new Error('Post not found!')
    }

    return JSON.parse(JSON.stringify(post))
}

