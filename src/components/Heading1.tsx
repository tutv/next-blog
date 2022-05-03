import {FC} from "react"
import RichText from "@components/RichText"


interface Props {
    content: Record<string, any>
}

const Heading1: FC<Props> = ({content}) => {
    const {rich_text} = content.heading_1

    if (!rich_text || !Array.isArray(rich_text) || !rich_text.length) return null

    return (
        <h1><RichText contents={rich_text}/></h1>
    )
}

export default Heading1
