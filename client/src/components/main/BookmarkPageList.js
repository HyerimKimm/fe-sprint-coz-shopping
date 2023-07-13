import React from 'react';
import { ProductPageListContainer } from './ProductPageList';
import { useSelector } from 'react-redux';
import { Item } from './Item';
import { NothingItem } from './NothingItem.style';

export const BookmarkPageList = () => {
    const selector = useSelector(state=>state);
    let items = selector.bookmarkReducer;

    return (
        <ProductPageListContainer>
        {
            items.length===0?<NothingItem>북마크한 아이템이 없습니다.</NothingItem>
            :items.map((e)=><Item key={e.id} item={e}/>)
        }
        </ProductPageListContainer>
    );
};