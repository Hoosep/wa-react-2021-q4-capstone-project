/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

export const Title = styled.h1`
    ${(props) => props.primary && `
        color: rgb(33, 33, 33);
    `}
    ${(props) => props.secondary && `
        color: #FFFFFF;
    `}
    font-family: 'Titillium Web',sans-serif;
    font-weight: 200;
    margin-top: 0;
    ${(props) => props.marginBottom === 'sm' && `
        margin-bottom: 1.2rem;
    `}
    ${(props) => props.marginBottom === 'md' && `
        margin-bottom: 1.8rem;
    `}
    ${(props) => props.marginBottom === 'lg' && `
        margin-bottom: 2.2rem;
    `}
    letter-spacing: -2px;
    line-height: 1;
    text-align: left;
    @media (max-width: 1199px) {
        font-size: 3rem;
    }
    @media (min-width: 1200px) {
        font-size: 4rem;
    }
    @media (min-width: 1400px) {
        font-size: 5rem;
    }
`;

export const Subtitle = styled.h2`
    ${(props) => props.primary && `
        color: rgb(33, 33, 33);
    `}
    ${(props) => props.secondary && `
        color: #FFFFFF;
    `}
    font-family: 'Titillium Web',sans-serif;
    font-weight: 200;
    margin-top: 0;
    ${(props) => props.marginBottom === 'sm' && `
        margin-bottom: 1.2rem;
    `}
    ${(props) => props.marginBottom === 'md' && `
        margin-bottom: 1.8rem;
    `}
    ${(props) => props.marginBottom === 'lg' && `
        margin-bottom: 2.2rem;
    `}
    line-height: 1;
    text-align: left;
    font-size: 1rem;
`;

export const Label = styled.label`
    display: block;
    ${(props) => props.primary && `
        color: rgb(33, 33, 33);
    `}
    ${(props) => props.secondary && `
        color: #FFFFFF;
    `}
    font-family: 'Helvetica Neue', sans-serif;
    font-weight: 200;
    margin-top: 0;
    ${(props) => props.marginBottom === 'sm' && `
        margin-bottom: 1.2rem;
    `}
    ${(props) => props.marginBottom === 'md' && `
        margin-bottom: 1.8rem;
    `}
    ${(props) => props.marginBottom === 'lg' && `
        margin-bottom: 2.2rem;
    `}
    ${(props) => props.marginTop === 'sm' && `
        margin-bottom: 1.2rem;
    `}
    ${(props) => props.marginTop === 'md' && `
        margin-bottom: 1.8rem;
    `}
    ${(props) => props.marginTop === 'lg' && `
        margin-bottom: 2.2rem;
    `}
    line-height: 1;
    text-align: left;
    font-size: 1rem;
`;

export const Paragraph = styled.p`
    color: #565656;
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 1rem;
    line-height: 24px;
    margin: 0 0 14px;
    text-align: justify;
`;
