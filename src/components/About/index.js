import React from 'react';
import styled from 'styled-components';

const AboutBase = styled.div`
    .titulo-design{
        font-weight: 400;
        padding-top:0px;
        margin: 20px 0 20px 0;
        color: #ffffff;
        text-align: center;
        font-size: 7em;
        font-family: 'bickham-script-pro-3', sans-serif;       
    }
    line-height: 1.5;
    margin-left: 30px;
    margin-right: 30px;
    padding: 3em 0;   
`;

function About() {
    return(
        <AboutBase>
            <h1 className="titulo-design" >Diego Vilela</h1>
            <div>
                <p>
                    Surf Videos.
                </p>
            </div>
        </AboutBase>
    );
};

export default About;