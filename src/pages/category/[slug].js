import CategoryPage from "../../components/category/CategoryPage"
import getListPosts from "../../actions/post/getListPosts"


export default function Category(props) {
    return (
        <CategoryPage {...props}/>
    )
}

export async function getServerSideProps(context) {
    const {slug} = context.params
    const posts = await getListPosts()

    return {
        props: {
            slug,
            posts
        }
    }
}

