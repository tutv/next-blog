import {Layout} from 'antd'
import MenuTop from "./MenuTop"
import LogoTop from "./LogoTop"


function HeaderTop() {
    return (
        <Layout.Header className="HeaderTop">
            <LogoTop/>
            <MenuTop/>
        </Layout.Header>
    )
}

export default HeaderTop

