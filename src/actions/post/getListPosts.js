const {getModel} = require('../../connections/database')


export default async () => {
    const Post = getModel('Post')

    const posts = await Post.find({status: 'active'})
        .select('-contents -source_id -last_synced_at -__v')
        .limit(100).lean()

    return JSON.parse(JSON.stringify(posts))
}

