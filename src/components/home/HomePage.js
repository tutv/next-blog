import DocTitle from "../../shared/DocTitle"
import HomePagination from "./HomePagination"
import ListPosts from "../listing-posts/ListPosts"


export default function HomePage(props) {
    return (
        <div className="HomePage">
            <DocTitle>Trang chủ</DocTitle>
            <ListPosts {...props}/>
            <HomePagination/>
        </div>
    )
}

