import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { updateIsModalOpen } from '../../redux/actions/isModalOpenAction';
import modalCloseButton from '../../assets/images/modalCloseButton.png'
import { BookmarkImg } from '../main/Item.style';
import bookmarkClick from '../../assets/images/BookmarkClick.svg'
import bookmarkNonClick from '../../assets/images/bookmarkNonclick.svg'
import { getBookmark } from '../../redux/actions/bookmarkAction';
import { insertToastList, removeToastList } from '../../redux/actions/toastAction';

export const BackgroundContainer= styled.div`
    background-color: rgba(255,255,255,0.4);
    position: fixed;
    top:0;
    left:0;
    width: 100vw;
    height: 100%;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ModalContainer = styled.section`
    box-sizing: border-box;
    position: fixed;
    width: 60vw;
    height: 45vw;
    max-width: 744px;
    max-height: 480px;
    min-width: 400px;
    min-height: 280px;
    left:50%;
    transform: translate(-50%,0);
    background:url(${(props)=>props.imgUrl}) no-repeat center center fixed;
    background-size: cover;
    border-radius: 20px;
`
export const ModalCloseButton = styled.button`
    box-sizing: border-box;
    margin: 15px;
    border:0;
    background-color: transparent;
    position: absolute;
    top:0;
    right: 0;
    cursor: pointer;
`
export const ModalCloseButtonImg = styled.img`
    width: 20px;
    height: 20px;
`
export const ModalBookmarkButton = styled.button`
    box-sizing: border-box;
    margin: 15px;
    border: 0;
    background-color: transparent;
    position: absolute;
    bottom: 0;
    left: 0;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const ModalItemTitle = styled.span`
    margin-left: 2px;
    font-size: 24px;
    color:#fff;
    text-shadow: 0px 0px 4px rgba(0,0,0,0.15);
    font-weight: 700;
`
export const Modal = ({item}) => {
    const dispatch = useDispatch();
    const selector = useSelector(state=>state);
    let bookmarkIdList = selector.bookmarkReducer.map((e)=>e.id);

    const bookmarkInsert = () => {
        localStorage.setItem('bookmark',JSON.stringify([
            ...selector.bookmarkReducer, item
        ]))
        dispatch(getBookmark(JSON.parse(localStorage.getItem('bookmark'))))
    }
    const bookmarkRemove = () => {
        localStorage.setItem('bookmark',JSON.stringify(selector.bookmarkReducer.filter(
            (e)=>e.id!==item.id
        )))
        dispatch(getBookmark(JSON.parse(localStorage.getItem('bookmark'))))
    }
    const modalClose = () => {
        dispatch(updateIsModalOpen(false,null));
    }
    const onModalClickHandler = (e) => {
        e.stopPropagation();
    }
    const onBookmarkClickHandler = (e) => {
        e.stopPropagation();
        if(bookmarkIdList.includes(item.id)) {
            bookmarkRemove();
            dispatch(insertToastList('remove'))
        }
        else {
            bookmarkInsert();
            dispatch(insertToastList('insert'))
        }
        setTimeout(()=>{
            dispatch(removeToastList())
        },3000)
    }

    return (
        <BackgroundContainer onClick={modalClose}>
            <ModalContainer imgUrl={item.type==="Brand"?item.brand_image_url:item.image_url} onClick={onModalClickHandler}>
                <ModalCloseButton onClick={modalClose}>
                    <ModalCloseButtonImg src={modalCloseButton}/>
                </ModalCloseButton>
                <ModalBookmarkButton onClick={onBookmarkClickHandler}>
                        <BookmarkImg src={bookmarkIdList.includes(item.id)?bookmarkClick:bookmarkNonClick}/>
                        <ModalItemTitle>
                        {
                            item.type==='Brand'?item.brand_name
                            :item.type==='Category'?`#${item.title}`
                            :item.title
                        }
                        </ModalItemTitle>
                </ModalBookmarkButton>
            </ModalContainer>
        </BackgroundContainer>
    );
};