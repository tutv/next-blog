import {PageHeader} from 'antd'


const routes = [
    {
        path: 'index',
        breadcrumbName: 'First-level Menu',
    },
    {
        path: 'first',
        breadcrumbName: 'Second-level Menu',
    },
    {
        path: 'second',
        breadcrumbName: 'Third-level Menu',
    },
]


function PostHeader() {
    return (
        <div>
            <PageHeader
                className="site-page-header"
                title="This is a title"
                breadcrumb={{routes}}
            />
        </div>
    )
}

export default PostHeader

