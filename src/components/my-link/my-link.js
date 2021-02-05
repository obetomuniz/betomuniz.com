import { Container, Text, PulseDot } from "./ui";

const MyLink = ({
  href = "",
  text = "",
  theme = { color: "WHITE_COLOR", bg: "PRIMARY_COLOR" },
  pin = false,
}) => {
  return (
    <Container
      href={href}
      theme={theme}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Text>{text}</Text>
      {pin && <PulseDot />}
    </Container>
  );
};

export default MyLink;
