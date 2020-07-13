import React from "react"

import { ScreenReaderContent } from "../"
import { Container, Form, Input, Button } from "./ui"

const Newsletter = ({ label }) => {
  const textLabel = label || "Cadastre-se e receba meus conteúdos no email"
  return (
    <Container>
      <Form
        action="https://betomuniz.us10.list-manage.com/subscribe/post?u=272246eec42af04685103c358&amp;id=ab6499fbe1"
        method="post"
        target="_blank"
        novalidate
      >
        <ScreenReaderContent as={"label"} htmlFor="email-newsletter-input">
          {textLabel}
        </ScreenReaderContent>
        <Input
          id="email-newsletter-input"
          type="email"
          name="EMAIL"
          placeholder={textLabel}
        />
        <Button>CADASTRAR</Button>
      </Form>
    </Container>
  )
}

export default Newsletter
