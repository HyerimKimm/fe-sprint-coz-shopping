//action type
export const UPDATE_TOAST_LIST = 'UPDATE_TOAST_LIST';

//action creater function
export const updateToastList = (toastList) => {
    return {
        type: UPDATE_TOAST_LIST,
        toastList: toastList,
    }
}