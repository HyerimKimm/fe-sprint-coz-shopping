import React, { useEffect } from 'react';
import categoryWhole from '../../assets/images/category_whole.png';
import categoryBrand from '../../assets/images/category_brand.png';
import categoryCategory from '../../assets/images/category_category.png';
import categoryExhibition from '../../assets/images/category_exhibition.png';
import categoryProduct from '../../assets/images/category_product.png'
import { useDispatch } from 'react-redux';
import { getItems } from '../../redux/actions/itemsAction';
import { getAllItemsService } from '../../services/api';
import { getBookmark } from '../../redux/actions/bookmarkAction';
import { CategoryButton, CategoryContainer, CategoryImg, CategoryTitle } from './CategoryItem.style';


export const CategoryItem = ({category}) => {
    const dispatch = useDispatch();

    const api실행 = async () => {
        const res = await getAllItemsService(10);
        return res;
    }

    const onClickHandler = () => {
        api실행().then((res)=>{
            let filteredRes;
            if(category==='whole') {
                filteredRes = res;
            } else if(category==='product') {
                filteredRes = res.filter((e)=>e.type==='Product');
            } else if(category==='category') {
                filteredRes = res.filter((e)=>e.type==='Category');
            } else if(category==='exhibition') {
                filteredRes = res.filter((e)=>e.type==='Exhibition');
            } else if(category==='brand') {
                filteredRes = res.filter((e)=>e.type==='Brand');
            } else {
                return;
            }
            dispatch(getItems(filteredRes));
        })
        const bookmark = JSON.parse(localStorage.getItem('bookmark'));
        if(category==='whole') {
            dispatch(getBookmark(bookmark));
        } else if(category==='product') {
            dispatch( getBookmark( bookmark.filter((e)=>e.type==='Product')) )
        } else if(category==='category') {
            dispatch( getBookmark( bookmark.filter((e)=>e.type==='Category')) )
        } else if(category==='exhibition') {
            dispatch( getBookmark( bookmark.filter((e)=>e.type==='Exhibition')) )
        } else if(category==='brand') {
            dispatch( getBookmark( bookmark.filter((e)=>e.type==='Brand')) )
        } else {
            return;
        }
    }
    return (
     <CategoryContainer>
        <CategoryButton onClick={onClickHandler}>
            <CategoryImg src={
                category==='whole'?categoryWhole
                :category==='product'?categoryProduct
                :category==='category'?categoryCategory
                :category==='exhibition'?categoryExhibition
                :category==='brand'?categoryBrand:null}/>
        </CategoryButton>
        <CategoryTitle>
            {
                category==='whole'?'전체'
                :category==='product'?'상품'
                :category==='category'?'카테고리'
                :category==='exhibition'?'기획전'
                :category==='brand'?'브랜드':null
            }
        </CategoryTitle>
     </CategoryContainer>
    );
};