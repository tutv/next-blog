import DocTitle from "../../shared/DocTitle"
import HomePagination from "./HomePagination"
import ListPosts from "./ListPosts"


export default function HomePage() {
    return (
        <div className="HomePage">
            <DocTitle>Trang chủ</DocTitle>
            <ListPosts/>
            <HomePagination/>
        </div>
    )
}

