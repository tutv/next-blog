import {Menu} from "antd"
import Link from "next/link"


function MenuTop() {
    return (
        <Menu
            theme="light"
            mode="horizontal"
            items={new Array(4).fill(null).map((_, index) => {
                const key = index + 1

                const label = (
                    <Link href={`/category/${key}`}>
                        <a>Cat {key}</a>
                    </Link>
                )

                return {
                    key,
                    label,
                }
            })}
        />
    )
}

export default MenuTop
