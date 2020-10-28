import { Header, Footer } from "..";

import Theme from "./theme";
import { NormalizedStyles, Container } from "./ui";

const Layout = ({ children, containerAs = "div" }) => {
  return (
    <>
      <Theme />
      <NormalizedStyles />
      <Header />
      <Container as={containerAs}>{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
