import PostBreadcrumb from "./PostBreadcrumb"
import PostCover from "./PostCover"
import PropTypes from 'prop-types'
import PostMeta from "./PostMeta"


function PostHeader({post}) {
    const {title} = post

    return (
        <div className="PostHeader">
            <PostBreadcrumb post={post}/>
            <PostCover post={post}/>
            <h1>{title}</h1>
            <PostMeta post={post}/>
        </div>
    )
}

PostHeader.propTypes = {
    post: PropTypes.object.isRequired
}

export default PostHeader

