import PropTypes from "prop-types"
import Head from "next/head"


function DocTitle({children}) {
    const vTitle = `${children} - Cholang.vn Blog`

    return (
        <Head>
            <title>{vTitle}</title>
        </Head>
    )
}

DocTitle.propTypes = {
    children: PropTypes.string.isRequired,
}

export default DocTitle

