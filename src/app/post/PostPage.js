import PostHeader from "./PostHeader"
import {Col, Row} from "antd"
import ListCategories from "../sidebar/ListCategories"
import LatestPosts from "../sidebar/LatestPosts"
import PostContent from "./PostContent"
import PropTypes from "prop-types"
import PostTableOfContents from "./PostTableOfContents"


function PostPage(props) {
    const {post} = props

    return (
        <div className="PostPage">
            <Row>
                <Col span={18}>
                    <PostHeader post={post}/>
                    <PostContent post={post}/>
                </Col>
                <Col span={6}>
                    <ListCategories/>
                    <PostTableOfContents post={post}/>
                    <LatestPosts/>
                </Col>
            </Row>
        </div>
    )
}

PostPage.propTypes = {
    post: PropTypes.object.isRequired
}

export default PostPage

