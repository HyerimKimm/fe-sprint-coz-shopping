import React from 'react';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { updateIsModalOpen } from '../../redux/actions/isModalOpenAction';
import modalCloseButton from '../../assets/images/modalCloseButton.png'

export const BackgroundContainer= styled.div`
    background-color: rgba(255,255,255,0.4);
    position: fixed;
    top:0;
    left:0;
    width: 100vw;
    height: 100%;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ModalContainer = styled.section`
    box-sizing: border-box;
    position: fixed;
    width: 60vw;
    height: 45vw;
    max-width: 744px;
    max-height: 480px;
    min-width: 400px;
    min-height: 280px;
    left:50%;
    transform: translate(-50%,0);
    background-image:url(${(props)=>props.imgUrl});
    background-size: cover;
    border-radius: 20px;
`
export const ModalCloseButton = styled.button`
    box-sizing: border-box;
    margin: 15px;
    border:0;
    background-color: transparent;
    position: absolute;
    top:0;
    right: 0;
    cursor: pointer;
`
export const ModalCloseButtonImg = styled.img`
    width: 24px;
    height: 24px;
`
export const Modal = ({item}) => {
    const dispatch = useDispatch();

    const onModalBackgroundClickHandler = () => {
        dispatch(updateIsModalOpen(false,null));
    }

    const onModalClickHandler = (e) => {
        e.stopPropagation();
    }

    return (
        <BackgroundContainer onClick={onModalBackgroundClickHandler}>
            <ModalContainer imgUrl={item.type==="Brand"?item.brand_image_url:item.image_url} onClick={onModalClickHandler}>
                <ModalCloseButton>
                    <ModalCloseButtonImg src={modalCloseButton}/>
                </ModalCloseButton>
            </ModalContainer>
        </BackgroundContainer>
    );
};