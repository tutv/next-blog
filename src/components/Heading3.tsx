import {FC} from "react"
import RichText from "@components/RichText"


interface Props {
    content: Record<string, any>
}

const Heading3: FC<Props> = ({content}) => {
    const {rich_text} = content.heading_3

    if (!rich_text || !Array.isArray(rich_text) || !rich_text.length) return null

    return (
        <h3><RichText contents={rich_text}/></h3>
    )
}

export default Heading3
