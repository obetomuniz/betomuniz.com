import { Container, Text, FeaturedText } from "./ui";

const DropCTACard = () => {
  return (
    <Container>
      <Text>
        <FeaturedText>Gostou?</FeaturedText>
        {" Assine meu canal no "}
        <a
          href="https://t.me/obetomuniz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram
        </a>
        {"."}
      </Text>
    </Container>
  );
};

export default DropCTACard;
