import React from "react"

import { Container, Form, Input, Button } from "./ui"

const Newsletter = () => {
  return (
    <Container>
      <Form
        action="https://betomuniz.us10.list-manage.com/subscribe/post?u=272246eec42af04685103c358&amp;id=ab6499fbe1"
        method="post"
        target="_blank"
        novalidate
      >
        <Input
          type="email"
          value=""
          name="EMAIL"
          placeholder="Receba conteúdos como este no seu email"
        />
        <Button>CADASTRAR</Button>
      </Form>
    </Container>
  )
}

export default Newsletter
