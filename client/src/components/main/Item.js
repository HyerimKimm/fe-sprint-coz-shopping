import React from 'react';
import bookmarkClick from '../../assets/images/BookmarkClick.svg'
import bookmarkNonClick from '../../assets/images/bookmarkNonclick.svg'
import { useDispatch, useSelector } from 'react-redux';
import { getBookmark } from '../../redux/actions/bookmarkAction';
import { BookmarkButton, BookmarkImg, ItemContainer, ItemImgContainer, ItemInfoContainer, ItemInfoContainerLine, 
        ItemInfoSubTitle, ItemInfoTitle, ItemInfoTitleRight} from './Item.style';
import { updateIsModalOpen } from '../../redux/actions/isModalOpenAction';
import { insertToastList, removeToastList } from '../../redux/actions/toastAction';


export const Item = ({item}) => {
    const selector = useSelector(state=>state);
    const dispatch = useDispatch();
    let bookmarkIdList = selector.bookmarkReducer.map((e)=>e.id);

    const bookmarkInsert = () => {
        //로컬 스토리지 - bookmark에 데이터 추가
        localStorage.setItem('bookmark',JSON.stringify([
            ...selector.bookmarkReducer, item
        ]))
        //dispatch
        dispatch(getBookmark(JSON.parse(localStorage.getItem('bookmark'))));
        dispatch(insertToastList('insert'))
    }
    const bookmarkRemove = () => {
        localStorage.setItem('bookmark',
            JSON.stringify(selector.bookmarkReducer.filter(
                (e)=>e.id!==item.id
            ))
        );
        dispatch(getBookmark(JSON.parse(localStorage.getItem('bookmark'))));
        dispatch(insertToastList('remove'))
    }
    const bookmarkClickHandler = (e) => {
        e.stopPropagation();
        if(bookmarkIdList.includes(item.id)) {
            bookmarkRemove();
        }
        else {
            bookmarkInsert();
        }
        setTimeout(()=>{
            dispatch(removeToastList())
        },3000)
    }
    const onImgClickHandler = () => {
        dispatch(updateIsModalOpen( true, item ));
    }

    return (
        <ItemContainer>
            <ItemImgContainer imgUrl={item.type==="Brand"?item.brand_image_url:item.image_url} onClick={onImgClickHandler}>
                <BookmarkButton onClick={bookmarkClickHandler}>
                    <BookmarkImg src={
                        bookmarkIdList.includes(item.id)?bookmarkClick:bookmarkNonClick
                    }/>
                </BookmarkButton>
            </ItemImgContainer>
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
