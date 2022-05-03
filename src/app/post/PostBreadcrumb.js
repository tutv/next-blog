import {Breadcrumb} from "antd"
import Link from "next/link"


function PostBreadcrumb(props) {
    const {title} = props.post

    return (
        <div className="PostBreadcrumb">
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link href="/">
                        <a>Trang chủ</a>
                    </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>{title}</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}

export default PostBreadcrumb
