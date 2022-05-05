import {FC} from "react"
import RichText from "@components/RichText"


interface Props {
    content: Record<string, any>
}

const BulletedListItem: FC<Props> = ({content}) => {
    const {bulleted_list_item} = content
    const {rich_text} = bulleted_list_item
    if (!rich_text || !Array.isArray(rich_text) || !rich_text.length) return <div className="BulletedListItem"/>


    return (
        <div className="BulletedListItem"><RichText contents={rich_text}/></div>
    )
}

export default BulletedListItem
