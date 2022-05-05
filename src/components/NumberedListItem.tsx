import {FC} from "react"
import RichText from "@components/RichText"


interface Props {
    content: Record<string, any>
}

const NumberedListItem: FC<Props> = ({content}) => {
    const {numbered_list_item} = content
    const {rich_text} = numbered_list_item
    if (!rich_text || !Array.isArray(rich_text) || !rich_text.length) return <div className="NumberedListItem"/>


    return (
        <div className="NumberedListItem"><RichText contents={rich_text}/></div>
    )
}

export default NumberedListItem
