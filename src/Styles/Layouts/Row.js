import styled from 'styled-components';

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: -12px;
    margin-right: -12px;
    margin-top: 0;

    & > * {
        width: 100%;
        height: 100%;
        padding-right: 12px;
        padding-left: 12px;
        margin-top: 0
    }
`;

export default Row;
