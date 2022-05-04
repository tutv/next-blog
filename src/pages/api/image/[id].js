import getImageUrl from "../../../actions/image/getImageUrl"


export default async function handler(req, res) {
    try {
        const {id} = req.query
        const url = await getImageUrl(id)
        console.log("URL:", url)

        res.redirect(url)
    } catch (error) {
        console.error(error)

        res.status(500).send('ERROR!')
    }

}
