import { styled } from "styled-components"

export const ItemContainer = styled.section`
    box-sizing: border-box;
    margin: 0 12px 0 12px;
    width: 264px;
    height: 264px;
    display: flex;
    flex-direction: column;
`
export const ItemImgContainer = styled.section`
    margin: 0;
    padding:0;
    width: 264px;
    height:210px;
    box-sizing: border-box;
    border-radius: 20px;
    box-shadow: 0 0 5px 3px rgba(0,0,0,0.1);
    background-image:url(${(props)=>props.imgUrl});
    background-size: 264px 210px;
    position: relative;
    top: 0;
    left: 0;
    cursor: pointer;
`
export const BookmarkButton = styled.button`
    position:absolute;
    top:80%;
    left: 85%;
    width:35px;
    height:35px;
    border: 0;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
export const BookmarkImg = styled.img`
    width: 30px;
    height:30px;
    filter: drop-shadow(5px 5px 5px rgba(0,0,4px,0.15));
`
export const ItemInfoContainer = styled.section`
    box-sizing: border-box;
    padding: 0px 10px;
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