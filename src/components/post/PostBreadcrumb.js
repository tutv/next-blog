import {Breadcrumb} from "antd"
import Link from "next/link"


function PostBreadcrumb() {
    return (
        <div className="PostBreadcrumb">
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link href="/">
                        <a>Trang chủ</a>
                    </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>This is a title</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}

export default PostBreadcrumb
