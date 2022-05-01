import HomePage from "../components/home/HomePage"
import getListPosts from "../actions/post/getListPosts"


export default function Home(props) {
    return (
        <HomePage {...props}/>
    )
}

export async function getServerSideProps(context) {
    const posts = await getListPosts()

    return {
        props: {
            posts
        }
    }
}

