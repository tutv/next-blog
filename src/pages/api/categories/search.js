import getListCategories from "../../../actions/category/getListCategories"


export default async function handler(req, res) {
    const categories = await getListCategories()

    res.status(200).json({categories})
}
