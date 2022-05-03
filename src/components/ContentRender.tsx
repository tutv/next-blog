import {FC} from 'react'
import Paragraph from "@components/Paragraph"
import Text from "@components/Text"
import MyImage from "@components/MyImage"
import NotSupported from "@components/NotSupported"
import Heading2 from "@components/Heading2"
import Heading3 from "@components/Heading3"
import Heading1 from "@components/Heading1"


interface Props {
    contents: [Record<string, any>]
}

const _maps: Record<string, any> = {
    paragraph: Paragraph,
    text: Text,
    image: MyImage,
    heading_1: Heading1,
    heading_2: Heading2,
    heading_3: Heading3
}

const _renderContent = (content: Record<string, any>) => {
    const {type} = content

    const MappedComponent = _maps[type]
    if (!MappedComponent) return <NotSupported content={content}/>

    return <MappedComponent content={content}/>
}

const ContentRender: FC<Props> = (props) => {
    const {contents} = props

    return (
        <>
            {contents.map(_renderContent)}
        </>
    )
}


export default ContentRender