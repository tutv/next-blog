import ListPosts from "../listing-posts/ListPosts"


function CategoryPage(props) {
    const {slug, posts} = props

    return (
        <div className="CategoryPage">
            <h1>Category {slug}</h1>
            <ListPosts posts={posts}/>
        </div>
    )
}

export default CategoryPage
