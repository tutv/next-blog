export default async () => {
    const listData = []
    for (let i = 0; i < 5; i++) {
        listData.push({
            href: `/post/${i}`,
            title: `ant design part ${i}`,
            avatar: `https://joeschmoe.io/api/v1/${i + 1}`,
            description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
            content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
        })
    }

    return listData
}

