import {Component, createElement} from "react"
import {List, Space} from "antd"
import {CalendarOutlined, ReadOutlined} from "@ant-design/icons"
import Link from "next/link"
import PropTypes from "prop-types"
import CategoryTag from "./CategoryTag"
import moment from 'moment'
import readingTimeText from "../../helpers/readingTimeText"

const IconText = ({icon, text}) => (
    <Space>
        {createElement(icon)}
        {text}
    </Space>
)


class PostItem extends Component {
    render() {
        const {title, slug, _id, category, created_at, reading_time} = this.props.post
        const str = moment(created_at).format('DD/MM/YYYY')
        const readingTime = readingTimeText(reading_time)

        const des = 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'

        return (
            <List.Item
                className="PostItem"
                key={_id}
                actions={[
                    <CategoryTag category={category}/>,
                    <IconText icon={ReadOutlined} text={readingTime} key="list-vertical-like-o"/>,
                    <IconText icon={CalendarOutlined} text={str} key="list-vertical-like-o"/>,
                ]}
                extra={
                    <img
                        width={272}
                        alt="logo"
                        src={`/api/post/${_id}/cover`}
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

