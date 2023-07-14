import { styled } from 'styled-components';
import bookmarkClick from '../../assets/images/BookmarkClick.svg';
import bookmarkNonClick from '../../assets/images/bookmarkNonclick.svg'
import { BookmarkImg } from '../main/Item.style';
import { useSelector } from 'react-redux';

export const ToastContainer = styled.div`
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 12px 15px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: end;
    z-index: 3;
`
export const ToastRowContainer = styled.div`
    box-sizing: border-box;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 12px;
    margin-left: 0;
    padding: 12px 24px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    border: 1px solid rgba(0, 0, 0, 0.10);
    background: #FFF;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.15);
    width: fit-content;
    color: #000;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
`
export const ToastBookmarkImg = styled(BookmarkImg)`
    margin: 0px 8px 0px 0px;
    padding: 0;
`
export const ToastBookmarkInsert = () => {
    return (
        <ToastRowContainer>
            <ToastBookmarkImg src={bookmarkClick}/>
            상품이 북마크에 추가되었습니다.
        </ToastRowContainer>
    );
}
export const ToastBookmarkRemove = () => {
    return (
        <ToastRowContainer>
        <ToastBookmarkImg src={bookmarkNonClick}/>
     상품이 북마크에서 제거되었습니다.
    </ToastRowContainer>
    )
}

export const Toast = () => {
    const selector = useSelector(state=>state);
    const toastList = selector.toastListReducer.toastList;

    return (
        <ToastContainer>
            {
                toastList.map( (e)=>e==='insert'?<ToastBookmarkInsert/>
                :e==='remove'?<ToastBookmarkRemove/>
                :null )
            }
        </ToastContainer>
    );
};