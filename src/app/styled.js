import styled from 'styled-components';

export const Box = styled.div`
background-color: ${({ valor}) => valor ? 'green' : 'red'};
width: 300px;
height: 300px;
`;

export const LightBox =styled.div`
    width:200px;
    height: 300px;
    
    display:flex;
    align-items:center;
    justify-content:center;
    background-color: blue;

`;