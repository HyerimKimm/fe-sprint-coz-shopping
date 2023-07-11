import React from 'react';
import { styled } from 'styled-components';

export const BookmarkContainer = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    width: 100vw;
`;

export const BookmarkPage = () => {
    return (
        <BookmarkContainer>
            this is bookmark page
        </BookmarkContainer>
    );
};