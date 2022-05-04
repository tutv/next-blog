import 'antd/dist/antd.css'
import "../styles/index.scss"
import Layout from "../layout/layout"
import NextNProgress from "nextjs-progressbar"


function MyApp({Component, pageProps}) {

    return (
        <Layout>
            <NextNProgress/>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
