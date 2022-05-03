import HomePage from "../components/home/HomePage"
import getListPosts from "../actions/post/getListPosts"


export default function Home(props) {
    return (
        <HomePage {...props}/>
    )
}

export async function getServerSideProps(context) {
    const {page} = Object.assign({}, context.query)
    const vPage = page > 0 ? parseInt(page, 10) : 1

    const posts = await getListPosts({page: vPage})

    return {
        props: {
            posts
        }
    }
}

