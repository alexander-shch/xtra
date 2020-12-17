import Styled from 'styled-components';

export const FormContainer = Styled.div`
display:flex;
justify-content: space-around;
margin:30px 0;

`;

export const SliderContainer = Styled.div`
height: 650px;
position:relative;
overflow:hidden;
`;

export const CalenderSlideContainer = Styled.div`
text-align: center;
    position: absolute;
    width: 99%;
    right:${(props) => (props.active ? 0 : '-100%')} ;
    transition: 1s;
`;

export const ListSlideContainer = Styled.div`
text-align: center;
    position: absolute;
    width: 99%;
    left:${(props) => (props.active ? '3px' : '-100%')};
    transition: 1s;
`;

export const SlideContainer = Styled.div`
margin:5px;
`;
