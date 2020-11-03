import { Container } from "./ui";

const DropNav = ({ href, children, left, right }) => {
  return (
    <Container
      href={href}
      left={left}
      style={{ left: left ? "0" : "auto", right: right ? "0" : "auto" }}
    >
      {children}
    </Container>
  );
};

export default DropNav;
