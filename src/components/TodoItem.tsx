import {FC} from "react"
import RichText from "@components/RichText"


interface Props {
    content: Record<string, any>
}

const TodoItem: FC<Props> = ({content}) => {
    const {to_do} = content
    const {rich_text} = to_do
    if (!rich_text || !Array.isArray(rich_text) || !rich_text.length) return <div className="TodoItem"/>


    return (
        <div className="TodoItem"><RichText contents={rich_text}/></div>
    )
}

export default TodoItem
