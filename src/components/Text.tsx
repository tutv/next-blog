import {FC} from "react"


interface Props {
    content: Record<string, any>
}

const _Bold = (content: any, bold?: boolean) => {
    if (!bold) return content

    return <strong>{content}</strong>
}

const _Italic = (content: any, italic?: boolean) => {
    if (!italic) return content

    return <i>{content}</i>
}

const _withLink = (content: any, link?: any) => {
    const {url} = Object.assign({}, link)
    if (!url) return content

    return (
        <a href={url} target="_blank" rel="noopener noreferrer">{content}</a>
    )
}

const Text: FC<Props> = ({content}) => {
    const {annotations, text} = content
    const {link, content: contentText} = Object.assign({}, text)

    const {bold, italic} = Object.assign({}, annotations)
    const c1 = _Italic(contentText || '', italic)
    const c2 = _Bold(c1, bold)

    return _withLink(c2, link)
}

export default Text
