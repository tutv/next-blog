import CategoryPage from "../../components/category/CategoryPage"


export default function Category(props) {
    return (
        <CategoryPage {...props}/>
    )
}

export async function getServerSideProps(context) {
    const {slug} = context.params

    return {
        props: {
            slug
        }
    }
}

