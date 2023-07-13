//action types
export const GET_ITEMS = 'GET_ITEMS';

//action creater function
export const getItems = (items) => {
    return {
        type: GET_ITEMS,
        items: items,
    }
}