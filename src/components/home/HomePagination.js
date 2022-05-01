import {Pagination} from 'antd'


function HomePagination() {
    return (
        <div className="HomHomePagination">
            <Pagination defaultCurrent={1} total={50}/>
        </div>
    )
}

export default HomePagination