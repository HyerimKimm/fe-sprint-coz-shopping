import { styled } from 'styled-components';
import BookmarkClick from '../assets/images/BookmarkClick.svg';
import bookmarkNonClick from '../assets/images/bookmarkNonclick.svg';
import hamburger from '../assets/images/hamburgerButton.svg';
import modalClose from '../assets/images/modalCloseButton.png';
import productList from '../assets/images/dropdownLogoProductList.svg';
import bookmark from '../assets/images/dropdownLogoBookmark.svg';
import headerLogo from '../assets/images/headerLogo.png'
import dropdownTriangle from '../assets/images/dropdownTriangle.svg'
import token from '../tokens/tokens.json'

const { Gray } = token.global;

export const iconNames = [
    'BookmarkClick',
    'BookmarkNonClick',
    'Close',
    'Hamburger',
    'ProductList',
    'Bookmark',
    'HeaderLogo',
    'DropdownTriangle'
];

export const Icon = ({icon, size}) => {
    const IconDesign = styled.img`
        color: ${(props)=>props.color||Gray.value};
    `
    return <IconDesign src={
        icon==='BookmarkClick'?BookmarkClick
        :icon==='BookmarkNonClick'?bookmarkNonClick
        :icon==='Hamburger'?hamburger
        :icon==='Close'?modalClose
        :icon==='ProductList'?productList
        :icon==='Bookmark'?bookmark
        :icon==='HeaderLogo'?headerLogo
        :icon==='DropdownTriangle'?dropdownTriangle
        :BookmarkClick}
        size={size}/>
}