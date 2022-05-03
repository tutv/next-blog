import ListPosts from "../listing-posts/ListPosts"

export default function SearchPage(props) {
    const {term, posts} = props

    return (
        <div className="SearchPage">
            <h1>Search for {term}</h1>

            <ListPosts posts={posts}/>
        </div>
    )
}

