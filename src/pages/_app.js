import "../styles/index.scss"
import Layout from "../layout/layout"


function MyApp({Component, pageProps}) {

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
