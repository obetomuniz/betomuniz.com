import { Container, Text } from "./ui";

const MyLink = ({
  href = "",
  text = "",
  theme = { color: "WHITE_COLOR", bg: "PRIMARY_COLOR" },
}) => {
  return (
    <Container
      href={href}
      theme={theme}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Text>{text}</Text>
    </Container>
  );
};

export default MyLink;
