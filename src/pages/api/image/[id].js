import getImageUrl from "../../../actions/image/getImageUrl"


export default async function handler(req, res) {
    try {
        const {id} = req.query
        const stream = await getImageUrl(id)

        stream.pipe(res)
    } catch (error) {
        console.error(error)

        res.status(500).send('ERROR!')
    }

}
