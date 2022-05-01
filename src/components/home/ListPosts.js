import {List, Avatar, Space} from 'antd'
import {MessageOutlined, LikeOutlined, StarOutlined} from '@ant-design/icons'
import React from 'react'
import Link from "next/link"

const listData = []
for (let i = 0; i < 5; i++) {
    listData.push({
        href: `/p/${i}`,
        title: `ant design part ${i}`,
        avatar: 'https://joeschmoe.io/api/v1/random',
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    })
}

const IconText = ({icon, text}) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
)


function ListPosts() {
    return (
        <div className="ListPosts">
            <List
                itemLayout="vertical"
                size="large"
                dataSource={listData}
                renderItem={item => (
                    <List.Item
                        className="PostItem"
                        key={item.title}
                        actions={[
                            <IconText icon={StarOutlined} text="156" key="list-vertical-star-o"/>,
                            <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o"/>,
                            <IconText icon={MessageOutlined} text="2" key="list-vertical-message"/>,
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
                            avatar={<Avatar src={item.avatar}/>}
                            title={
                                <Link href={item.href}>
                                    <a>{item.title}</a>
                                </Link>
                            }
                            description={item.description}
                        />
                        {item.content}
                    </List.Item>
                )}
            />
        </div>
    )
}


export default ListPosts

