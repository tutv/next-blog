const {getModel} = require('../../connections/database')


const _buildQuery = async (args) => {
    const query = {
        status: 'active'
    }

    const {category} = Object.assign({}, args)

    if (category) {
        const Category = getModel('Category')
        const cat = await Category.findOne({slug: category}).select('_id').lean()

        if (!cat) throw new Error('Category not found.')

        query.category = cat._id
    }

    return {
        query,
    }
}


export default async (args = {}) => {
    const Post = getModel('Post')
    const Category = getModel('Category')

    const {query} = await _buildQuery(args)

    const posts = await Post.find(query)
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

