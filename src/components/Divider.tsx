import {FC} from "react"


interface Props {
    content: Record<string, any>
}

const Divider: FC<Props> = ({content}) => {
    return (
        <div className="Divider">
            <hr/>
        </div>
    )
}

export default Divider
