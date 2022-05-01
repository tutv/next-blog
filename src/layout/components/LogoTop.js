import Image from "next/image"

function LogoTop() {
    return (
        <div className="LogoTop">
            <Image width={50} height={50} src="/logo.png"/>
        </div>
    )
}

export default LogoTop

