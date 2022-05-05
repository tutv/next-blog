import {Component, createElement} from "react"
import {List, Space} from "antd"
import {CalendarOutlined} from "@ant-design/icons"
import Link from "next/link"
import PropTypes from "prop-types"
import CategoryTag from "./CategoryTag"
import moment from 'moment'

const IconText = ({icon, text}) => (
    <Space>
        {createElement(icon)}
        {text}
    </Space>
)


class PostItem extends Component {
    render() {
        const {title, slug, _id, category, created_at} = this.props.post
        const str = moment(created_at).format('DD/MM/YYYY')

        const des = 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'

        return (
            <List.Item
                className="PostItem"
                key={_id}
                actions={[
                    <CategoryTag category={category}/>,
                    <IconText icon={CalendarOutlined} text={str} key="list-vertical-like-o"/>,
                ]}
                extra={
                    <img
                        width={272}
                        alt="logo"
                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                    />
                }>
                <List.Item.Meta
                    title={
                        <Link href={`/post/${slug}`}>
                            <a>{title}</a>
                        </Link>
                    }
                    description={des}
                />
            </List.Item>
        )
    }
}

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
}

export default PostItem

