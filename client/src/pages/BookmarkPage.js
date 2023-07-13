import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { getBookmark } from '../redux/actions/bookmarkAction';
import { Category } from '../components/nav/Category';
import { BookmarkPageList } from '../components/main/BookmarkPageList';
import { updateIsHamburgerClick } from '../redux/actions/isHamburgerClickAction';

export const BookmarkContainer = styled.div`
    box-sizing: border-box;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const BookmarkPage = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state=>state);

    useEffect(()=>{
        const bookmark = JSON.parse(localStorage.getItem('bookmark'));
        
        if(selector.isHamburgerClickReducer) {
            dispatch(updateIsHamburgerClick());
        }
        dispatch(getBookmark(bookmark));
    },[])

    return (
        <BookmarkContainer>
            <Category/>
            <BookmarkPageList/>
        </BookmarkContainer>
    );
};