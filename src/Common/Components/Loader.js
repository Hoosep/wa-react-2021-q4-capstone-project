import React from 'react';
import styled from 'styled-components';

const LoaderStyled = styled.div`
  &.outer-container-loader{
    width: 80%;
    position: absolute;
    top: 50%;
  }

  .container {
    text-align: center;
    .basic-loader {
      font-size: 4.5rem;
    }
  }
`;

const Loader = () => (
  <LoaderStyled className="outer-container-loader">
    <div className="container">
      <div className="basic-loader">
        <i className="fas fa-spinner fa-pulse" />
      </div>
    </div>
  </LoaderStyled>
);

export default Loader;
