import {FC} from "react"
import {Image} from 'antd'


interface Props {
    content: Record<string, any>
}

const _getAltFromCaption = (caption?: Record<string, any>[]) => {
    if (!caption || !caption.length) return ''

    let alt = ''
    caption.forEach(cap => {
        const {plain_text} = Object.assign({}, cap)
        const vText = (plain_text || '').toString()
        alt+=vText
    })

    return alt
}

const MyImage: FC<Props> = ({content}) => {
    const {image} = content
    const {file, caption} = Object.assign({}, image)
    if (!file) return null

    const {url} = Object.assign({}, file)
    if (!url) return null

    const alt = _getAltFromCaption(caption)

    return (
        <Image alt={alt} className="MyImage" src={url}/>
    )
}

export default MyImage
