import React from 'react';
import bookmarkNonClick from '../../assets/images/bookmarkNonclick.svg'
import bookmarkClick from '../../assets/images/bookmarkClick.svg'

import { styled } from 'styled-components';

export const BookmarkImg = styled.img`
    width: 24px;
    height: 24px;
`
export const BookmarkButton = () => {
    return (
        <BookmarkImg src={bookmarkClick}></BookmarkImg>
    );
};