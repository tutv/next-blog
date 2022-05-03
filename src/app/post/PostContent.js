import PropTypes from "prop-types"
import ContentRender from "@components/ContentRender"


function PostContent(props) {
    const {contents} = props.post

    return (
        <div className="PostContent">
            <ContentRender contents={contents}/>
        </div>
    )
}

PostContent.propTypes = {
    post: PropTypes.object.isRequired
}

export default PostContent

