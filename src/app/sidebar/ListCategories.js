import {List} from "antd"
import Link from "next/link"


const data = [
    'UNCATEGORIZED',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.'
]


function ListCategories() {
    return (
        <div className="ListCategories">
            <List
                size="large"
                header={<h3>Danh mục</h3>}
                dataSource={data}
                renderItem={(item, index) => {
                    return (
                        <List.Item key={index}>
                            <Link href={`/category/${index + 1}`}>
                                {item}
                            </Link>
                        </List.Item>
                    )
                }
                }
            />
        </div>
    )
}


export default ListCategories

