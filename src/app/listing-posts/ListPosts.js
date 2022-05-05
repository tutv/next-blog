import {List} from 'antd'
import React from 'react'
import PropTypes from "prop-types"
import PostItem from "./PostItem"


const _renderItem = (item) => {
    return (
        <PostItem post={item}/>
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

