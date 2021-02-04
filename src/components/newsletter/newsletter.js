import { Container, Form, Input, Button } from "./ui";

const Newsletter = ({ label }) => {
  const textLabel = label || "Cadastre seu email e receba minha newsletter";

  return (
    <Container>
      <Form
        action="https://www.getrevue.co/profile/obetomuniz/add_subscriber"
        method="post"
        id="revue-form"
        name="revue-form"
        target="_blank"
        novalidate
      >
        <label className={"sro"} htmlFor="email-newsletter-input">
          {textLabel}
        </label>
        <Input
          id="email-newsletter-input"
          type="email"
          name="member[email]"
          placeholder={textLabel}
          required
        />
        <Button type="submit">CADASTRAR</Button>
      </Form>
    </Container>
  );
};

export default Newsletter;
