import { SimpleFeedItem } from "..";
import { Container } from "./ui";

const SimpleFeed = ({ feed }) => {
  const items = feed.map((item, index) => (
    <SimpleFeedItem key={`feed-item-${index}`} data={item} />
  ));
  return <Container>{items}</Container>;
};

export default SimpleFeed;
