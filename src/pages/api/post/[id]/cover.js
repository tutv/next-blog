import getPageCover from "../../../../actions/image/getPageCover"


export default async function handler(req, res) {
    try {
        const {id} = req.query
        const stream = await getPageCover(id)
        stream.pipe(res)
    } catch (error) {
        console.error(error)

        res.status(500).send('ERROR!')
    }

}
