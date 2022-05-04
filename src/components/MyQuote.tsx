import {FC} from "react"
import RichText from "@components/RichText"


interface Props {
    content: Record<string, any>
}

const MyQuote: FC<Props> = ({content}) => {
    const {rich_text} = content.quote

    if (!rich_text || !Array.isArray(rich_text) || !rich_text.length) return null

    return (
        <div className="MyQuote">
            <div className="Inner">
                <RichText contents={rich_text}/>
            </div>
        </div>
    )
}

export default MyQuote
