/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

export const Title = styled.h1`
    color: rgb(33, 33, 33);
    font-family: 'Titillium Web',sans-serif;
    font-weight: 200;
    margin-bottom: 0.2rem;
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

export const Paragraph = styled.p`
    color: #565656;
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 1rem;
    line-height: 24px;
    margin: 0 0 14px;
    text-align: justify;
`;
