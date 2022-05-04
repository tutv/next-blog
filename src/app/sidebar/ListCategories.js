import {List} from "antd"
import Link from "next/link"
import {Component} from "react"
import classNames from 'classnames'
import dynamic from "next/dynamic"


const _fetchListCategories = async () => {
    console.log("FETCHING...")
    const res = await fetch('/api/categories/search')
    const json = await res.json()
    const {categories} = Object.assign({}, json)

    return Array.isArray(categories) ? categories : []
}

class ListCategories extends Component {
    state = {
        categories: [],
        loading: false
    }

    _fetchData = async () => {
        if (this.state.loading) return

        this.setState({
            loading: true
        })

        console.log('fetching...')

        try {
            const categories = await _fetchListCategories()

            this.setState({
                categories,
                loading: false
            })

        } catch (error) {
            this.setState({
                loading: false
            })
        }


    }

    componentDidMount() {
        this._fetchData()
    }

    render() {
        const {categories, loading} = this.state

        return (
            <div className={classNames("ListCategories", {loading})}>
                <List
                    size="large"
                    header={<h3>Danh mục {loading ? 'loading...' : ''}</h3>}
                    dataSource={categories}
                    renderItem={(item, index) => {
                        const {name, slug} = item

                        return (
                            <List.Item key={index}>
                                <Link href={`/category/${slug}`}>
                                    {name}
                                </Link>
                            </List.Item>
                        )
                    }
                    }
                />
            </div>
        )
    }
}


export default ListCategories
