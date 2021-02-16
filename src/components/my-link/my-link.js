import { Container, Text, PulseDot, PulseDotAlt } from "./ui";

const MyLink = ({
  href = "",
  text = "",
  theme = { color: "WHITE_COLOR", bg: "PRIMARY_COLOR", textShadow: false },
  pin = false,
  altPin = false,
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
      {altPin && <PulseDotAlt />}
    </Container>
  );
};

export default MyLink;
