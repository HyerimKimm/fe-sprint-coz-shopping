import React from 'react';
import categoryWhole from '../../assets/images/category_whole.png';
import categoryBrand from '../../assets/images/category_brand.png';
import categoryCategory from '../../assets/images/category_category.png';
import categoryExhibition from '../../assets/images/category_exhibition.png';
import categoryProduct from '../../assets/images/category_product.png'
import { styled } from 'styled-components';

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
    console.log(`category: ${category}`)
    return (
     <CategoryContainer>
        <CategoryButton>
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