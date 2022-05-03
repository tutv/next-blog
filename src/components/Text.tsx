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

const Text: FC<Props> = ({content}) => {
    const {plain_text, annotations} = content

    const {bold, italic} = Object.assign({}, annotations)
    const c1 = _Bold(plain_text || '', bold)

    return _Italic(c1, italic)
}

export default Text
