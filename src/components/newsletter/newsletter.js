import { useState, useCallback } from "react";

import { Container, Form, Input, Button, SubmittedMessage } from "./ui";

const Newsletter = ({ label }) => {
  const textLabel = label || "Cadastre seu email e receba meus conteúdos";
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const handleOnSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      if (email) {
        await fetch(
          "https://hook.integromat.com/cohe83p5inxqalyax5do0wr2w59alg5y",
          {
            method: "post",
            body: email,
          }
        );
        setIsSubmitted(true);
      }
    },
    [email]
  );

  return (
    <Container>
      {!isSubmitted ? (
        <Form method="post" novalidate>
          <label className={"sro"} htmlFor="email-newsletter-input">
            {textLabel}
          </label>
          <Input
            id="email-newsletter-input"
            type="email"
            name="EMAIL"
            placeholder={textLabel}
            onChange={({ target: { value } }) => setEmail(value)}
          />
          <Button type="button" onClick={handleOnSubmit}>
            CADASTRAR
          </Button>
        </Form>
      ) : (
        <SubmittedMessage>Cadastro realizado com sucesso!</SubmittedMessage>
      )}
    </Container>
  );
};

export default Newsletter;
