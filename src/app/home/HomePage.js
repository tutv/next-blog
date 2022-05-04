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
                <Col lg={{span: 16}} xs={{span: 24}}>
                    <ListPosts {...props}/>
                    <HomePagination/>
                </Col>
                <Col lg={{span: 8}} xs={{span: 24}}>
                    <ListCategories/>
                    <LatestPosts/>
                </Col>
            </Row>
        </div>
    )
}

