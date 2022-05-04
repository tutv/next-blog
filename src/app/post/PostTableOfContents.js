import PropTypes from "prop-types"
import TocItem from "./TocItem"


const _renderItem = (item, index) => {
    const {type, id} = item

    const types = ['heading_1', 'heading_2', 'heading_3']
    if (!types.includes(type)) return null

    return (
        <div key={id || index} data-block-id={id}>
            <TocItem item={item}/>
        </div>
    )
}

function PostTableOfContents({post}) {
    const {contents} = Object.assign({}, post)
    const arr = Array.isArray(contents) ? contents : []

    if (!arr.length) return null

    return (
        <div className="PostTableOfContents">
            <div className="Label">Mục lục</div>
            {arr.map(_renderItem)}
        </div>
    )
}


PostTableOfContents.propTypes = {
    post: PropTypes.object.isRequired
}

export default PostTableOfContents
