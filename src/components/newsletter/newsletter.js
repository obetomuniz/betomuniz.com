import React, { useState, useCallback } from "react"

import { ScreenReaderContent } from "../"
import { Container, Form, Input, Button, SubmittedMessage } from "./ui"

const Newsletter = ({ label }) => {
  const textLabel = label || "Receba meus conteúdos no email"
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [email, setEmail] = useState("")
  const handleOnSubmit = useCallback(
    async (event) => {
      event.preventDefault()
      await fetch(
        "https://hook.integromat.com/cohe83p5inxqalyax5do0wr2w59alg5y",
        {
          method: "post",
          body: email,
        }
      )
      setIsSubmitted(true)
    },
    [email]
  )

  return (
    <Container>
      {!isSubmitted ? (
        <Form method="post" novalidate onSubmit={handleOnSubmit}>
          <ScreenReaderContent as={"label"} htmlFor="email-newsletter-input">
            {textLabel}
          </ScreenReaderContent>
          <Input
            id="email-newsletter-input"
            type="email"
            name="EMAIL"
            placeholder={textLabel}
            onChange={({ target: { value } }) => setEmail(value)}
          />
          <Button type="submit">CADASTRAR</Button>
        </Form>
      ) : (
        <SubmittedMessage>Cadastro realizado com sucesso!</SubmittedMessage>
      )}
    </Container>
  )
}

export default Newsletter
