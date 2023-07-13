import React, { useEffect } from 'react';
import { ProductPageList } from '../components/main/ProductPageList';
import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { updateIsHamburgerClick } from '../redux/actions/isHamburgerClickAction';
import { Category } from '../components/nav/Category';

export const ProductPageContainer=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ProductListPage = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state=>state);

    useEffect(()=>{
        if(selector.isHamburgerClickReducer) {
            dispatch(updateIsHamburgerClick());
        }
    },[])

    return (
        <ProductPageContainer>
            <Category/>
            <ProductPageList/>
        </ProductPageContainer>
        
    );
};