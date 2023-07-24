import { styled } from "styled-components"
import tokens from '../../tokens/tokens.json'

const { BodyText, Gray } = tokens.global;

export const NothingItem = styled.div`
    font-size: ${BodyText.value}px;
    color: ${Gray.value};
    margin: 30px 0px;
`