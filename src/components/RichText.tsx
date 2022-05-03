import {FC} from "react"
import Text from '@components/Text'

interface Props {
    contents: Record<string, any>[]
}

const RichText: FC<Props> = ({contents}) => {
    return (
        <>
            {
                contents.map((content, index) => {
                    return (
                        <Text key={index} content={content}/>
                    )
                })
            }
        </>
    )
}

export default RichText
