import DocTitle from "../../shared/DocTitle"
import HomePagination from "./HomePagination"
import ListPosts from "../listing-posts/ListPosts"
import {Col, Row} from "antd"
import ListCategories from "../sidebar/ListCategories"
import LatestPosts from "../sidebar/LatestPosts"


export default function HomePage(props) {
    return (
        <div className="HomePage">
            <DocTitle>Trang chủ</DocTitle>
            <Row>
                <Col span={18}>
                    <ListPosts {...props}/>
                    <HomePagination/>
                </Col>
                <Col span={6}>
                    <ListCategories/>
                    <LatestPosts/>
                </Col>
            </Row>
        </div>
    )
}

