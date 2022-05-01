import Footer from './footer'
import Header from "./header"
import HeaderTop from "./components/HeaderTop"
import {Layout as AntLayout} from 'antd'


export default function Layout({children}) {
    return (
        <>
            <Header/>
            <AntLayout  className="layout">
                <HeaderTop/>

                <AntLayout.Content className="Main">
                    {children}
                </AntLayout.Content>
                <Footer/>
            </AntLayout>
        </>
    )
}

