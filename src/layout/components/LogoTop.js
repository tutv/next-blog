import Image from "next/image"
import Link from "next/link"

function LogoTop() {
    return (
        <div className="LogoTop">
            <Link href="/">
                <a>
                    <Image width={50} height={50} src="/logo.png"/>
                </a>
            </Link>
        </div>
    )
}

export default LogoTop

