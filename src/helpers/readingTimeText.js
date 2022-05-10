export default (time) => {
    const minutes = Math.round(time / 1000 / 60)

    const vMinutes = Math.max(1, minutes)

    return `${vMinutes} phút`
}
