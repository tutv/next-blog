import CategoryPage from "../../app/category/CategoryPage"
import getListPosts from "../../actions/post/getListPosts"


export default function Category(props) {
    return (
        <CategoryPage {...props}/>
    )
}

export async function getServerSideProps(context) {
    const {slug} = context.params
    const posts = await getListPosts({category: slug})

    return {
        props: {
            slug,
            posts
        }
    }
}

