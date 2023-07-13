//action type
export const GET_BOOKMARK = 'GET_BOOKMARK'

//action creater function
export const getBookmark = (bookmarks) => {
    return {
        type: GET_BOOKMARK,
        bookmarks: bookmarks,
    }
}