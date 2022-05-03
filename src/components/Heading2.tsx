import {FC} from "react"
import RichText from "@components/RichText"


interface Props {
    content: Record<string, any>
}

const Heading2: FC<Props> = ({content}) => {
    const {rich_text} = content.heading_2

    if (!rich_text || !Array.isArray(rich_text) || !rich_text.length) return null

    return (
        <h2><RichText contents={rich_text}/></h2>
    )
}

export default Heading2
