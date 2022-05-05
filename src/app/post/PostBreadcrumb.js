import {Breadcrumb} from "antd"
import Link from "next/link"


function PostBreadcrumb(props) {
    const {title, category} = props.post
    const {name, slug} = Object.assign({}, category)

    return (
        <div className="PostBreadcrumb">
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link href="/">
                        <a>Trang chủ</a>
                    </Link>
                </Breadcrumb.Item>
                {
                    !!slug && (
                        <Breadcrumb.Item>
                            <Link href={`/category/${slug}`}>
                                <a>{name}</a>
                            </Link>
                        </Breadcrumb.Item>
                    )
                }
                <Breadcrumb.Item>{title}</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}

export default PostBreadcrumb
