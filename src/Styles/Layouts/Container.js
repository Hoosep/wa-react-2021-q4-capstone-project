import styled from 'styled-components';

const Container = styled.div`
    margin-right: auto;
    margin-left: auto;
    padding-right: 12px;
    padding-left: 12px;
    width: 100%;
    @media (min-width: 576px) {
        max-width: 540px;
    }
    @media (min-width: 768px) {
        max-width: 720px;
    }
    @media (min-width: 992px) {
        max-width: 960px;
    }
    @media (min-width: 1200px) {
        max-width: 1140px;
    }
    @media (min-width: 1400px) {
        max-width: 1320px;
    }

    ${(props) => props.paddingVertical && `
        padding-top: 2rem;
        padding-bottom: 2rem;
    `}
    ${(props) => props.paddingHorizontal && `
        padding-left: 2rem;
        padding-right: 2rem;

        @media (max-width: 768px) {
            padding-left: 0;
            padding-right: 0;
        }
    `}

    ${(props) => props.secondary && `
        background-color: #101118;
    `}

    ${(props) => props.fluid && `
        max-width: 90%!important;
    `}
`;

export default Container;
