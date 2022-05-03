import PostHeader from "./PostHeader"
import {Col, Row} from "antd"
import ListCategories from "../sidebar/ListCategories"
import LatestPosts from "../sidebar/LatestPosts"
import PostContent from "./PostContent"


function PostPage() {
    return (
        <div className="PostPage">
            <Row>
                <Col span={18}>
                    <PostHeader/>
                    <PostContent/>
                </Col>
                <Col span={6}>
                    <ListCategories/>
                    <LatestPosts/>
                </Col>
            </Row>
        </div>
    )
}

export default PostPage
