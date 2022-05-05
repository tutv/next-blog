import {FC} from "react"
import RichText from "@components/RichText"


interface Props {
    content: Record<string, any>
}

const CodeViewer: FC<Props> = ({content}) => {
    const {code} = content
    const {rich_text} = code
    if (!rich_text || !Array.isArray(rich_text) || !rich_text.length) return <pre className="CodeViewer"/>

    return (
        <pre className="CodeViewer"><RichText contents={rich_text}/></pre>
    )
}

export default CodeViewer
