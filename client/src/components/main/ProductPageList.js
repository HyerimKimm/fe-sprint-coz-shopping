import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { Item } from './Item';

export const ProductPageListContainer = styled.main`
    margin: 0 10vw 0 10vw;
    width: 80vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`

export const ProductPageList = () => {
    const selector = useSelector(state=>state);
    let items = selector.itemsReducer;

    return (
        <ProductPageListContainer>
        {
            items.map((e)=><Item key={e.id} item={e}/>)
        }
        </ProductPageListContainer>
    );
};