import {FC} from "react"
import RichText from "@components/RichText"


interface Props {
    content: Record<string, any>
}

const Paragraph: FC<Props> = ({content}) => {
    const {paragraph} = content
    const {rich_text} = paragraph
    if (!rich_text || !Array.isArray(rich_text) || !rich_text.length) return <p/>


    return (
        <p><RichText contents={rich_text}/></p>
    )
}

export default Paragraph
