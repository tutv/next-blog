import {FC} from "react"
import Text from '@components/Text'

interface Props {
    contents: Record<string, any>[]
}

const RichText: FC<Props> = ({contents}) => {
    return (
        <>
            {
                contents.map(content => {
                    return (
                        <Text content={content}/>
                    )
                })
            }
        </>
    )
}

export default RichText
