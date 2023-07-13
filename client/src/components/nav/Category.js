import React from 'react';
import { styled } from 'styled-components';
import { CategoryItem } from './CategoryItem';

const CategoryContainer = styled.nav`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const Category = () => {
    return (
        <CategoryContainer>
            <CategoryItem category='whole'/>
            <CategoryItem category='product'/>
            <CategoryItem category='category'/>
            <CategoryItem category='exhibition'/>
            <CategoryItem category='brand'/>
        </CategoryContainer>
    );
};