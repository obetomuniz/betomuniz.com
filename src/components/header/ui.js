import styled from "styled-components";

export const Container = styled.header`
  width: 765px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 440px) {
    width: 100%;
    padding: 0 10%;
  }

  @media screen and (max-width: 320px) {
    width: 300px;
    padding: 0 10px;
  }
`;

export const Photo = styled.a`
  height: 80px;
  width: 80px;
  display: block;
  border-radius: 100%;
  position: relative;
  box-shadow: 3px 3px 0 1px var(--BLACK_COLOR);
`;

export const PhotoImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 100%;
  overflow: hidden;
`;

export const SocialsContainer = styled.div``;
