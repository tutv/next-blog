import PostPage from "../../components/post/PostPage"
import getPostBySlug from "../../actions/post/getPostBySlug"


export default function Post(props) {
    return (
        <PostPage {...props}/>
    )
}

export async function getServerSideProps(context) {
    const {params} = context
    const {slug} = params
    const post = await getPostBySlug(slug)

    return {
        props: {
            slug,
            post
        }
    }
}