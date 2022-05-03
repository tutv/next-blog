import PostBreadcrumb from "./PostBreadcrumb"
import PostCover from "./PostCover"
import PropTypes from 'prop-types'


function PostHeader(props) {
    const {post} = props
    const {title} = post

    return (
        <div className="PostHeader">
            <PostBreadcrumb {...props}/>
            <PostCover {...props}/>
            <h1>{title}</h1>
        </div>
    )
}

PostHeader.propTypes = {
    post: PropTypes.object.isRequired
}

export default PostHeader

