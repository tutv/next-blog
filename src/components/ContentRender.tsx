import {FC} from 'react'
import Paragraph from "@components/Paragraph"
import Text from "@components/Text"
import MyImage from "@components/MyImage"
import NotSupported from "@components/NotSupported"
import Heading2 from "@components/Heading2"
import Heading3 from "@components/Heading3"
import Heading1 from "@components/Heading1"
import MyQuote from "@components/MyQuote"
import Callout from "@components/Callout"
import BulletedListItem from "@components/BulletedListItem"
import NumberedListItem from "@components/NumberedListItem"
import TodoItem from "@components/TodoItem"
import Divider from "@components/Divider"
import CodeViewer from "@components/CodeViewer"


interface Props {
    contents: [Record<string, any>]
}

const _maps: Record<string, any> = {
    paragraph: Paragraph,
    text: Text,
    image: MyImage,
    heading_1: Heading1,
    heading_2: Heading2,
    heading_3: Heading3,
    quote: MyQuote,
    callout: Callout,
    bulleted_list_item: BulletedListItem,
    numbered_list_item: NumberedListItem,
    to_do: TodoItem,
    divider: Divider,
    code: CodeViewer,
}

const _renderContent = (state: Record<string, any>) => (content: Record<string, any>, index: number) => {
    const {previousContent} = state
    state.previousContent = content

    const {type, id} = content

    const MappedComponent = _maps[type]
    if (!MappedComponent) return <NotSupported key={id || index} content={content}/>

    const {type: previousType} = Object.assign({}, previousContent)
    if (previousType) {
        if (previousType === type) {
            state.listIndex++
        } else {
            state.listIndex = 1
        }
    }

    const {listIndex} = state

    return (
        <div className="ContentItem" key={id || index} data-block-id={id}>
            <MappedComponent listIndex={listIndex} content={content}/>
        </div>
    )
}

const ContentRender: FC<Props> = ({contents}) => {
    const state: Record<string, any> = {
        listIndex: 1,
        previousContent: null
    }

    return (
        <>
            {contents.map(_renderContent(state))}
        </>
    )
}


export default ContentRender