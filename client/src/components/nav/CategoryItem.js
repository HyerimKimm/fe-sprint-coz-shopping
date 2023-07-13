import React, { useEffect } from 'react';
import categoryWhole from '../../assets/images/category_whole.png';
import categoryBrand from '../../assets/images/category_brand.png';
import categoryCategory from '../../assets/images/category_category.png';
import categoryExhibition from '../../assets/images/category_exhibition.png';
import categoryProduct from '../../assets/images/category_product.png'
import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../../redux/actions/itemsAction';
import { getAllItemsService } from '../../services/api';

export const CategoryContainer = styled.section`
    box-sizing: border-box;
    margin: 24px 18px 12px 18px;
    width: 82px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const CategoryButton = styled.button`
    border: 0;
    background-color: transparent;
    cursor: pointer;
`
export const CategoryImg = styled.img`
    width: 82px;
    height: 82px;
`
export const CategoryTitle = styled.span`
`
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