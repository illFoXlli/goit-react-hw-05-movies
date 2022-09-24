import styled from 'styled-components';

export const ContainerSteled = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;

  @media screen and (max-width: 480px) {
    width: 320px;
  }

  @media screen and (max-width: 767.98px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;
