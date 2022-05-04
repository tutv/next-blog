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
                <Col lg={{span: 16}} xs={{span: 24}}>
                    <PostHeader post={post}/>
                    <PostContent post={post}/>
                </Col>
                <Col lg={{span: 8}} xs={{span: 24}}>
                    <PostTableOfContents post={post}/>
                    <ListCategories/>
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

