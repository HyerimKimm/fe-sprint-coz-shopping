//action types
export const UPDATE_IS_MODAL_OPEN = 'UPDATE_IS_MODAL_OPEN';

//action creator function
export const updateIsModalOpen = (value) => {
    return {
        type: UPDATE_IS_MODAL_OPEN,
        value: value,
    }
}