import { Container, Text, FeaturedText } from './ui';

const DropCTA = () => {
  return (
    <Container>
      <Text>
        <FeaturedText>Liked?</FeaturedText>
        {' Subscribe to my '}
        <a
          href="https://t.me/obetomuniz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram Channel
        </a>
      </Text>
    </Container>
  );
};

export default DropCTA;
