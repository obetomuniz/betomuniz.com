import { Container, Copyright } from "./ui";

const Footer = () => {
  return (
    <Container>
      <Copyright>
        Copyright <a href="https://betomuniz.com">Beto Muniz</a>
        {` © 2010-${new Date().getFullYear()}. All rights reserved.`}
      </Copyright>
    </Container>
  );
};

export default Footer;
