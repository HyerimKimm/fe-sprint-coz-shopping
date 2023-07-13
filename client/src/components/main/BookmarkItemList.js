import React from 'react';
import { styled } from 'styled-components';
import { MainPageContainer, MainPageRowContainer } from './MainItemList';
import { useSelector } from 'react-redux';
import bookmarkReducer from '../../redux/reducers/bookmarkReducer';
import itemsReducer from '../../redux/reducers/itemsReducer';
import { Item } from './Item';

export const BookmarkItemList = () => {
    const selector = useSelector(state=>state);
    let bookmarks = selector.bookmarkReducer.filter((ele,idx)=>idx<4);

    console.log(bookmarks)
    return (
        <MainPageContainer>
            <MainPageRowContainer>
                {
                    bookmarks.map((e)=><Item key={e.id} item={e}/>)
                }
            </MainPageRowContainer>
        </MainPageContainer>
    );
};
