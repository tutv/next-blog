import ListPosts from "../listing-posts/ListPosts"


function CategoryPage(props) {
    const {slug} = props

    return (
        <div className="CategoryPage">
            <h1>Category {slug}</h1>
            <ListPosts/>
        </div>
    )
}

export default CategoryPage
