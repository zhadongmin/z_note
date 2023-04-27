module.exports = {
    title: "操作备忘录",
    desciption: "能简单查到的东西不需要记忆",
    author: "zhadongmin",
    // base: "/z_note/",
    themeConfig: {
        sidebar: [
            {
                title: '书签',
                collapsable: false,
                children: [
                    {
                        title: '网站',
                        path: '/bookmark/website.md'
                    },
                    {
                        title: '视频',
                        path: '/bookmark/video.md'
                    },
                    {
                        title: '开源',
                        path: '/bookmark/opensoure.md'
                    },
                ]
            },
            {
                title: 'TODO',
                collapsable: true,
                path: '/todo/todo.md',
                children: [
                ]
            },
            {
                title: 'daily',
                collapsable: true,
                children: [
                    {
                        title: '2023-04-27',
                        path: '/daily/2023-04-27.md'
                    },
                ]
                
            }
        ]
    }
}