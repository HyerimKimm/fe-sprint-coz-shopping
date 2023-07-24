import token from '../tokens/tokens.json'
import { styled } from 'styled-components';

const { Heading1, Heading2, BodyText, SmallText, Gray } = token.global;

export const Heading1Text = styled.h1`
    font-size: ${Heading1.value}px;
`
export const Heading2Text = styled.h2`
    font-size: ${Heading2.value}px;
`
export const ItemTitle = styled.span`
    font-size: ${BodyText.value}px;
    font-weight: bold;
`
export const InfoText = styled.span`
    font-size: ${BodyText.value}px;
`
export const SmallInfoText = styled.span`
    font-size: ${SmallText.value}px;
    color: ${Gray.value};
`