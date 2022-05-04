const {getModel} = require('../../connections/database')


export default async () => {
    const Category = getModel('Category')

    const categories = await Category.find({})
        .select('-source_id -updated_at -created_at')
        .sort({
            created_at: -1
        })
        .limit(20)
        .lean()

    return JSON.parse(JSON.stringify(categories))
}

