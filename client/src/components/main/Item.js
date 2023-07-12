import React from 'react';
import { styled } from 'styled-components';

export const ItemContainer = styled.section`
    box-sizing: border-box;
    margin: 0 12px 0 12px;
    width: 264px;
    height: 264px;
    display: flex;
    flex-direction: column;
`
export const ItemImg = styled.img`
    box-sizing: border-box;
    width: 264px;
    height: 210px;
    border-radius: 20px;
    box-shadow: 0 0 5px 3px rgba(0,0,0,0.1);
    cursor: pointer;
`
export const ItemInfoContainer = styled.section`
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    height: 54px;
    display: flex;
    flex-direction: column;
    align-items: start;
`
export const ItemInfoContainerLine = styled.section`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
`
export const ItemInfoTitle = styled.span`
    flex-grow: 1;
    font-weight: bold;
    text-align: start;
`
export const ItemInfoTitleRight = styled.span`
    color: ${(props)=>props.type==='Product'?'rgba(69, 44, 221, 1)':'black'};
    font-weight: bold;
`
export const ItemInfoSubTitle = styled.span`
    width: 100%;
    text-align: ${(props)=>props.type==='Brand'||props.type==='Product'?'right':'left'};
`

export const Item = ({item}) => {
    console.log(item.type)
    return (
        <ItemContainer>
            <ItemImg src={item.type==='Brand'?`${item.brand_image_url}`:`${item.image_url}`}/>
            <ItemInfoContainer>
{/* 제품 카테고리 종류 : Exhibition, Product, Brand, Category */}
                <ItemInfoContainerLine>
                    <ItemInfoTitle>
                        {
                            item.type==='Brand'?item.brand_name
                            :item.type==='Category'?`#${item.title}`
                            :item.title
                        }
                    </ItemInfoTitle>
                    <ItemInfoTitleRight type={item.type}>
                    {
                        item.type==='Brand'?'관심고객수'
                        :item.type==='Product'||item.discountPercentage!==null?`${item.discountPercentage}%`
                        :null
                    }
                    </ItemInfoTitleRight>
                </ItemInfoContainerLine>
                <ItemInfoContainerLine>
                    <ItemInfoSubTitle type={item.type}>
                        {
                            item.type==='Brand'?item.follower.toLocaleString('ko-KR')
                            :item.type==='Product'?`${Number(item.price).toLocaleString('ko-KR')}원`
                            :item.type==='Exhibition'?item.sub_title
                            :null
                        }
                    </ItemInfoSubTitle>
                </ItemInfoContainerLine>
            </ItemInfoContainer>
        </ItemContainer>
    );
};
