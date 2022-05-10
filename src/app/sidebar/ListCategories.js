import {List} from "antd"
import {Component} from "react"
import classNames from 'classnames'
import CategoryItem from "./CategoryItem"


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
                    header={<h3>Danh mục {loading ? '...' : ''}</h3>}
                    dataSource={categories}
                    renderItem={(item, index) => {
                        return (
                            <CategoryItem category={item} key={index}/>
                        )
                    }
                    }
                />
            </div>
        )
    }
}


export default ListCategories
