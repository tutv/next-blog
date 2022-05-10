import React, {Component} from "react"
import Link from "next/link"
import {List} from "antd"
import PropTypes from "prop-types"


class CategoryItem extends Component {
    render() {
        const {name, slug, count_posts} = this.props.category

        return (
            <List.Item className="CategoryItem">
                <Link href={`/category/${slug}`}>
                    <a>{name} ({count_posts})</a>
                </Link>
            </List.Item>
        )
    }
}

CategoryItem.propTypes = {
    category: PropTypes.object.isRequired,
}

export default CategoryItem
