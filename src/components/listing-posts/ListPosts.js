import {List, Avatar, Space} from 'antd'
import {MessageOutlined, LikeOutlined, StarOutlined} from '@ant-design/icons'
import React from 'react'
import Link from "next/link"
import PropTypes from "prop-types"


const IconText = ({icon, text}) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
)


const _renderItem = (item) => {
    const {title, slug, _id} = item

    return (
        <List.Item
            className="PostItem"
            key={_id}
            actions={[
                <IconText icon={StarOutlined} text="156" key="list-vertical-star-o"/>,
                <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o"/>,
                <IconText icon={MessageOutlined} text="2" key="list-vertical-message"/>
            ]}
            extra={
                <img
                    width={272}
                    alt="logo"
                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
            }
        >
            <List.Item.Meta
                title={
                    <Link href={`/post/${slug}`}>
                        <a>{title}</a>
                    </Link>
                }
                description={title}
            />
            {title}
        </List.Item>
    )
}


function ListPosts(props) {
    const {posts} = props

    return (
        <div className="ListPosts">
            <List
                itemLayout="vertical"
                size="large"
                dataSource={posts}
                renderItem={_renderItem}
            />
        </div>
    )
}

ListPosts.propTypes = {
    posts: PropTypes.array.isRequired
}

export default ListPosts

