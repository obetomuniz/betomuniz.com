import { Header, Footer } from "..";

import Theme from "./theme";
import { NormalizedStyles, Container } from "./ui";

const Layout = ({
  children,
  containerAs = "div",
  socials,
  bottomNewsletter,
}) => {
  return (
    <>
      <Theme />
      <NormalizedStyles />
      <Header>{socials && socials()}</Header>
      <Container as={containerAs}>{children}</Container>
      {bottomNewsletter && bottomNewsletter()}
      <Footer />
    </>
  );
};

export default Layout;
