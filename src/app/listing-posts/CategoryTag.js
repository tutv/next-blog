import {Tag} from "antd"
import Link from "next/link"


const _mapColor = (color) => {
    return color
}

export default function CategoryTag({category}) {
    if (!category) return null

    const {slug, name, color} = Object.assign({}, category)
    if (!slug) return null

    const c = _mapColor(color)

    return (
        <div>
            <Tag color={c}>
                <Link href={`/category/${slug}`}>
                    <a>{name}</a>
                </Link>
            </Tag>
        </div>
    )
}