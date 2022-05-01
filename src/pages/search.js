import SearchPage from "../components/search/SearchPage"
import getListPosts from "../actions/post/getListPosts"


export default function Search(props) {
    return (
        <SearchPage {...props}/>
    )
}


export async function getServerSideProps(context) {
    const {s} = Object.assign({}, context.query)
    const posts = await getListPosts({search: s})

    return {
        props: {
            term: s,
            posts
        }
    }
}
