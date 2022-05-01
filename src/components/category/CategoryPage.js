import ListPosts from "../listing-posts/ListPosts"
import {Col, Row} from "antd"
import ListCategories from "../sidebar/ListCategories"
import LatestPosts from "../sidebar/LatestPosts"


function CategoryPage(props) {
    const {slug, posts} = props

    return (
        <div className="CategoryPage">
            <h1>Category {slug}</h1>
            <Row>
                <Col span={18}>
                    <ListPosts posts={posts}/>
                </Col>

                <Col span={6}>
                    <ListCategories/>
                    <LatestPosts/>
                </Col>
            </Row>
        </div>
    )
}

export default CategoryPage
