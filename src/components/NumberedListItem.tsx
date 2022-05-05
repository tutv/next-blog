import {FC} from "react"
import RichText from "@components/RichText"


interface Props {
    content: Record<string, any>,
    listIndex: number,
}

const NumberedListItem: FC<Props> = ({content, listIndex}) => {
    const {numbered_list_item} = content
    const {rich_text} = numbered_list_item
    if (!rich_text || !Array.isArray(rich_text) || !rich_text.length) return <div className="NumberedListItem"/>

    const style: Record<string, any> = {"--pseudoBefore--content": `"${listIndex}."`}

    return (
        <div className="NumberedListItem">
            <div className="Inner">
                <span style={style} className="PseudoBefore"></span>
                <span className="Text">
                    <RichText contents={rich_text}/>
                </span>
            </div>
        </div>
    )
}

export default NumberedListItem
