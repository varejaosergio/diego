import React from 'react';
import styled, { css } from 'styled-components';

import Footer from '../Footer';
import Menu from '../Menu';

const HomeStyle = styled.div`
    background: linear-gradient( #5f9af1, #FFFFFF);
`;
const Main = styled.main`    
    background-color: var(--black);
    
    flex: 1;
    padding-top: 50px; 
    padding-left: 5%; 
    padding-right: 5%;
    ${({ paddingAll }) => css`
        padding: ${paddingAll};
    `}
`;

function PageDefault({ children, paddingAll }) {
    return (
        <HomeStyle>
            <Menu/>
                <Main paddingAll= {paddingAll}>
                    {children}
                </Main>                
            <Footer/>
        </HomeStyle>
    );
}

export default PageDefault;