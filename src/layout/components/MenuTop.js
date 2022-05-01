import {Menu} from "antd"


function MenuTop() {
    return (
        <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={new Array(6).fill(null).map((_, index) => {
                const key = index + 1
                return {
                    key,
                    label: `cat ${key}`,
                }
            })}
        />
    )
}

export default MenuTop
