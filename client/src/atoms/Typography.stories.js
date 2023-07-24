import { Heading1Text, Heading2Text, ItemTitle, InfoText, SmallInfoText } from './Typography';

const Typography = ({ type, text }) => {
    if(type==='Heading1') {
        return <Heading1Text>{text}</Heading1Text>;
    } else if(type==='Heading2') {
        return <Heading2Text>{text}</Heading2Text>;
    } else if(type==='ItemTitle') {
        return <ItemTitle>{text}</ItemTitle>;
    } else if(type==='InfoText') {
        return <InfoText>{text}</InfoText>;
    } else if(type==='SmallInfoText') {
        return <SmallInfoText>{text}</SmallInfoText>;
    } else {
        return <InfoText>{text}</InfoText>;
    }
}

export default {
    title: 'Atoms/Typography',
    component: Typography, 
    argTypes: {
        type: {
            options: ['Heading1', 'Heading2', 'ItemTitle', 'InfoText', 'SmallInfoText'],
            control: { type: 'radio' }
        },
    },
    parameters: {
        backgrounds: {
            default: { value: 'light' }
        }
    }
}

export const Heading1 = {
    args: {
        type: 'Heading1',
        text: 'This is Heading1',
    }
}
export const Heading2 = {
    args: {
        type: 'Heading2',
        text: 'This is Heading2',
    }
}
export const ItemTitleHeading = {
    args: {
        type: 'ItemTitle',
        text: 'This is Item Title',
    }
}
export const BodyInfoText = {
    args: {
        type: 'InfoText',
        text: 'This is Info Text'
    }
}
export const SmallInfo = {
    args: {
        type: 'SmallInfoText',
        text: 'This is Small Info Text'
    }
}