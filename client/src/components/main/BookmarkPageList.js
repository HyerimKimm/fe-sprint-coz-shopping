import React from 'react';
import { ProductPageListContainer } from './ProductPageList';
import { useSelector } from 'react-redux';
import { Item } from './Item';


export const BookmarkPageList = () => {
    const selector = useSelector(state=>state);
    let items = selector.bookmarkReducer;

    return (
        <ProductPageListContainer>
        {
            items.map((e)=><Item key={e.id} item={e}/>)
        }
        </ProductPageListContainer>
    );
};