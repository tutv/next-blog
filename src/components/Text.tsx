import {FC} from "react"


interface Props {
    content: Record<string, any>
}

const _Bold = (content: any, bold?: boolean) => {
    if (!bold) return content

    return <strong>{content}</strong>
}

const Text: FC<Props> = ({content}) => {
    const {plain_text, annotations} = content

    const {bold} = Object.assign({}, annotations)

    return _Bold(plain_text || '', bold)
}

export default Text
