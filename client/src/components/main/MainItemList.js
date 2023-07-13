import React from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { Item } from './Item';

export const MainPageContainer = styled.main`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const MainPageRowContainer = styled.section`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

export const MainItemList = () => {
    const selector = useSelector(state=>state);
    let mainPageProductList = selector.itemsReducer.filter((ele,idx)=>idx<4);

    return (
        <MainPageContainer>
            <MainPageRowContainer>
                {
                    mainPageProductList.map((e)=><Item key={e.id} item={e}></Item>)
                }
            </MainPageRowContainer>
        </MainPageContainer>
    );
};