import React from 'react';
import { MainPageContainer, MainPageRowContainer } from './MainItemList';
import { useSelector } from 'react-redux';
import { Item } from './Item';

export const BookmarkItemList = () => {
    const selector = useSelector(state=>state);
    let bookmarks = selector.bookmarkReducer.filter((ele,idx)=>idx<4);

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
