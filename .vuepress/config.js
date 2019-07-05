module.exports = {
    themeConfig:{
        appName: "Zhouchang De Blog",
        github:"https://github.com/zhouchang2017",
        twitter:"https://twitter.com/zhouchang_dev",
        lastUpdated: 'Last Updated',
    },
    
    postcss: {
        plugins: [
            require('postcss-import'),
            require('tailwindcss'),
            require('postcss-nested'),
            require('autoprefixer')
        ]
    },

    plugins: [
        ['@vuepress/search', {
            searchMaxSuggestions: 10
        }],
        ['@vuepress/blog', { 
            directories:[{dirname:'posts'}],
            frontmatters:[{
            // Unique ID of current classification
            id: 'tag',
            // Decide that the frontmatter keys will be grouped under this classification
            keys: ['tag'],
            // Path of the `entry page` (or `list page`)
            path: '/tag/',
            // Layout of the `entry page`
            layout: 'Tag',
          }]
        }]
    ]
}