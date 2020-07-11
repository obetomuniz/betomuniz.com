import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto var(--DEFAULT_MARGIN);
`

export const Form = styled.form`
  width: 550px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 440px) {
    width: 100%;
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
`
