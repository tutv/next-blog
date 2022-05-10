import React, {Component} from "react"
import PropTypes from "prop-types"
import {Descriptions} from "antd"
import {CalendarOutlined, InboxOutlined, ReadOutlined} from "@ant-design/icons"
import readingTimeText from "../../helpers/readingTimeText"
import moment from "moment"


class PostMeta extends Component {
    render() {
        const {reading_time, category, created_at} = this.props.post
        const readingTime = readingTimeText(reading_time)
        const {name} = Object.assign({}, category)
        const str = moment(created_at).format('DD/MM/YYYY')

        return (
            <div className="PostMeta">
                <Descriptions colon={false} size="small">
                    <Descriptions.Item label={<InboxOutlined/>}>{name}</Descriptions.Item>
                    <Descriptions.Item label={<CalendarOutlined/>}>{str}</Descriptions.Item>
                    <Descriptions.Item label={<ReadOutlined/>}>{readingTime}</Descriptions.Item>
                </Descriptions>
            </div>
        )
    }
}

PostMeta.propTypes = {
    post: PropTypes.object.isRequired
}

export default PostMeta
