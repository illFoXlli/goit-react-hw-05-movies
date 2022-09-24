import styled from 'styled-components';

export const ListCard = styled.ul`
  position: relative;

  margin-left: auto;
  margin-right: auto;
  align-items: space-between;
  width: 130px;

  text-align: center;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 152px;
  }

  @media screen and (min-width: 1280px) {
    width: 288px;
  }

  &::before {
    content: '';
    position: absolute;
    z-index: 0;
    width: 109px;
    height: 101px;
    right: 0;
    top: -9px;
    border: 1px solid var(--outline-border-color);
    box-sizing: border-box;
    border-radius: 50px 0px;

    @media screen and (min-width: 768px) {
      width: 120px;
      height: 112px;

      top: -10px;
    }

    @media screen and (min-width: 1280px) {
      width: 227px;
      height: 212px;

      top: -19px;
    }
  }
`;

export const Img = styled.img`
  position: relative;
  width: 120px;
  height: 151px;
  margin-right: auto;
  z-index: 10;
  object-fit: cover;

  border-radius: 50px 0px;

  @media screen and (min-width: 768px) {
    width: 141px;
    height: 178px;
  }

  @media screen and (min-width: 1280px) {
    width: 267px;
    height: 337px;
  }
`;
export const Title = styled.h2`
  width: 130px;
  font-weight: 700;
  font-size: 14px;
  line-height: calc(17.07 / 14);
  margin-right: auto;
  margin-left: auto;
  min-height: 70px;
  text-shadow: 1px 0 1px rgb(241, 109, 183);

  @media screen and (min-width: 768px) {
    width: 152px;
    font-size: 16px;
    line-height: calc(19.5 / 16);
    min-height: 80px;
  }

  @media screen and (min-width: 1280px) {
    width: 288px;
    min-height: 40px;
    maerin-top: 12px;
  }
`;
export const Span = styled.span`
  margin-right: auto;
  margin-left: auto;
  color: var(--primary-white-text-color);
  font-size: 14px;
  line-height: calc(17.07 / 14);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(19.5 / 14);
  }

  @media screen and (min-width: 1280px) {
    width: 288px;
  }
`;
