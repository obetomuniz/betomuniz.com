import { Container } from "./ui";

const SimpleFeedItem = ({ data }) => {
  const {
    data: { title },
  } = data;
  return <Container>{title}</Container>;
};

export default SimpleFeedItem;
