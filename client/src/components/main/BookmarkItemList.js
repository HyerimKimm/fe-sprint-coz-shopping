import React from 'react';
import { MainPageContainer, MainPageRowContainer } from './MainItemList';
import { useSelector } from 'react-redux';
import { Item } from './Item';
import { NothingItem } from './NothingItem.style';

// 디자인은 MainItemList.js 꺼로 갖다 썼음
export const BookmarkItemList = () => {
    const selector = useSelector(state=>state);
    let bookmarks = selector.bookmarkReducer.filter((ele,idx)=>idx<4);

    return (
        <MainPageContainer>
            <MainPageRowContainer>
                {
                    bookmarks.length===0?<NothingItem>북마크한 아이템이 없습니다.</NothingItem>
                    :bookmarks.map((e)=><Item key={e.id} item={e}/>)
                }
            </MainPageRowContainer>
        </MainPageContainer>
    );
};
