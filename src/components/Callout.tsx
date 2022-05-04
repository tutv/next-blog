import {FC, useEffect} from "react"
import RichText from "@components/RichText"


interface Props {
    content: Record<string, any>
}

const _normalizeEmoji = (content: any) => {
    if (!content) return ''

    if (typeof content === 'string') return content

    const keys = Object.keys(content)
    const arr = keys.map(key => content[key])

    return arr.join('')
}

const _renderIcon = (icon: Record<string, any>) => {
    const {type} = Object.assign({}, icon)

    if (!type) return null

    const content = Object.assign({}, icon[type])
    if (!content) return null

    const str = _normalizeEmoji(content)

    return (
        <div className="Icon">
            {str}
        </div>
    )
}

const Callout: FC<Props> = ({content}) => {
    const {rich_text, icon} = content.callout

    if (!rich_text || !Array.isArray(rich_text) || !rich_text.length) return null

    const Icon = _renderIcon(icon)

    return (
        <div className="Callout">
            <div className="Inner">
                {Icon}
                <div className="InnerContent">
                    <RichText contents={rich_text}/>
                </div>
            </div>
        </div>
    )
}

export default Callout
