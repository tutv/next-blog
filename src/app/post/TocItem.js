import PropTypes from "prop-types"
import RichText from "@components/RichText"


const _handleClick = (item) => e => {
    e.preventDefault()

    const {id} = item
    const selector= `.ContentItem[data-block-id="${id}"]`
    const element = document.querySelector(selector)

    if (element) {
        element.scrollIntoView({behavior: "smooth", block: "start"})
    }
}

function TocItem({item}) {
    const {type} = Object.assign({}, item)
    const {rich_text} = Object.assign({}, item[type])
    const arr = Array.isArray(rich_text) ? rich_text : []

    if (!arr.length) return null

    return (
        <div onClick={_handleClick(item)} className={`TocItem TOC-${type}`}>
            <RichText contents={rich_text}/>
        </div>
    )
}

TocItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default TocItem