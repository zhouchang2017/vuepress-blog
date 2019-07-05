export const isPost = page => {
    return page.regularPath.startsWith('/posts/')
        && page.regularPath !== '/posts/'
}