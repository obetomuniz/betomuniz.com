import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 550px;
  margin: 0 auto var(--DEFAULT_MARGIN);

  @media screen and (max-width: 440px) {
    flex-direction: column;
    padding: 0 calc(10% - 10px);
    width: 100%;
    margin: 0 auto calc(var(--DEFAULT_MARGIN_MOBILE) / 1.5);
  }
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 440px) {
    flex-direction: column;
  }
`

export const Input = styled.input`
  background-color: transparent;
  color: var(--DEFAULT_NEWSLETTER_THEME);
  font-size: 1rem;
  padding: 10px;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid var(--DEFAULT_NEWSLETTER_THEME);
  flex: 1;
  text-align: center;
  display: block;
  height: 40px;

  ::-webkit-input-placeholder {
    color: var(--DEFAULT_NEWSLETTER_THEME);
  }
  ::-moz-placeholder {
    color: var(--DEFAULT_NEWSLETTER_THEME);
  }
  :-ms-input-placeholder {
    color: var(--DEFAULT_NEWSLETTER_THEME);
  }
  :-moz-placeholder {
    color: var(--DEFAULT_NEWSLETTER_THEME);
  }

  @media screen and (max-width: 440px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`

export const Button = styled.button`
  background-color: var(--DEFAULT_NEWSLETTER_THEME);
  border: 0;
  padding: 0;
  margin: 0;
  line-height: 0;
  display: block;
  cursor: pointer;
  border-radius: 5px;
  color: var(--DEFAULT_NEWSLETTER_BUTTON_TEXT);
  font-weight: 600;
  font-size: 1rem;
  width: 155px;

  @media screen and (max-width: 440px) {
    width: 100%;
    height: 40px;
  }
`
