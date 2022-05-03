import {FC} from "react"


interface Props {
    content: Record<string, any>
}

const NotSupported: FC<Props> = (props) => {
    const {type} = props.content

    return (
        <div>not supported: {type}</div>
    )
}

export default NotSupported
