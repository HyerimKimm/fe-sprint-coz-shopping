import { styled } from 'styled-components';
import { MainItemList } from '../components/main/MainItemList';
import { BookmarkItemList } from '../components/main/BookmarkItemList';
import { useDispatch, useSelector } from 'react-redux';
import { updateIsHamburgerClick } from '../redux/actions/isHamburgerClickAction';
import { useEffect } from 'react';

export const MainContainer = styled.div`
    margin: 0 0 10px 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
export const MainTitle = styled.h2`
    text-align: start;
    margin-top: 40px;
    margin-bottom: 10px;
    margin-left: 12%;
    font-size: 24px;
`

export const MainPage = () => {
    const selector = useSelector(state=>state)
    const dispatch = useDispatch();

    useEffect(()=>{
        if(selector.isHamburgerClickReducer) { dispatch(updateIsHamburgerClick()); }    
    },[])

    return (
        <MainContainer>
            <MainTitle>상품 리스트</MainTitle>
            <MainItemList/>
            <MainTitle>북마크 리스트</MainTitle>
            <BookmarkItemList/>
        </MainContainer>
    );
};