const {getModel} = require('../../connections/database')


export default async () => {
    const Post = getModel('Post')
    const Category = getModel('Category')

    const posts = await Post.find({status: 'active'})
        .populate({
            path: 'category',
            model: Category,
            select: 'name slug color'
        })
        .select('-contents -source_id -last_synced_at -__v')
        .sort({
            created_at: -1
        })
        .limit(100)
        .lean()

    return JSON.parse(JSON.stringify(posts))
}

