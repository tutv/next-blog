import {Image} from "antd"


function PostCover({post}) {
    const {_id} = post
    return (
        <Image src={`/api/post/${_id}/cover`} preview={false} alt="Cover"/>
    )
}

export default PostCover

