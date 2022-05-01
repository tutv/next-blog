import NextHead from "next/head"


export default function Header() {
    return (
        <NextHead>
            <title>ChoLang Blog</title>
            <meta name="description" content="Cholang.vn blog"/>
            <link rel="icon" href="/favicon.png"/>
        </NextHead>
    )
}
