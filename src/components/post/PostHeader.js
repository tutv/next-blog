import {Breadcrumb, Image} from "antd"
import Link from "next/link"
import PostBreadcrumb from "./PostBreadcrumb"
import PostCover from "./PostCover"

const routes = [
    {
        path: 'index',
        breadcrumbName: 'First-level Menu'
    },
    {
        path: 'first',
        breadcrumbName: 'Second-level Menu'
    },
    {
        path: 'second',
        breadcrumbName: 'Third-level Menu'
    }
]


function PostHeader() {
    return (
        <div className="PostHeader">
            <PostBreadcrumb/>
            <PostCover/>
            <h1>This is a title</h1>
        </div>
    )
}

export default PostHeader

