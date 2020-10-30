import { Container, TweetEmbededLink } from "./ui";

const Tweet = ({ src }) => {
  return (
    <Container>
      <blockquote className="twitter-tweet">
        <TweetEmbededLink href={src}>&nbsp;</TweetEmbededLink>
      </blockquote>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      ></script>
    </Container>
  );
};

export default Tweet;
