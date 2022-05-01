import PostHeader from "./PostHeader"
import {Col, Row} from "antd"
import ListCategories from "../sidebar/ListCategories"
import LatestPosts from "../sidebar/LatestPosts"


function PostPage() {
    return (
        <div className="PostPage">
            <Row>
                <Col span={18}>
                    <PostHeader/>
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

