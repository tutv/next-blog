import {FC} from "react"


interface Props {
    contents: Record<string, any>[]
}

const RichText: FC<Props> = ({contents}) => {
    return (
        <>
            {
                contents.map(content => {
                    const {plain_text} = content

                    return plain_text || ''
                })
            }
        </>
    )
}

export default RichText
