//action type
export const INSERT_TOAST = 'INSERT_TOAST';
export const REMOVE_TOAST = 'REMOVE_TOAST';

//action creater function
export const insertToastList = (value) => {
    return {
        type: INSERT_TOAST,
        payload: value,
    }
}
export const removeToastList = () => {
    return {
        type: REMOVE_TOAST
    }
}