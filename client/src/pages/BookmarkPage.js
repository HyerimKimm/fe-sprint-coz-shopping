import React from 'react';
import { styled } from 'styled-components';

export const BookmarkContainer = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    background-color: red;
    width: 100vw;
`;

const BookmarkPage = () => {
    return (
        <BookmarkContainer>
            this is bookmark page
        </BookmarkContainer>
    );
};

export default BookmarkPage;