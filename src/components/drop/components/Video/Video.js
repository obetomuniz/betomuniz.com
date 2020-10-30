import { getAuthorDetails } from "../../../../helpers";
import { A } from "..";
import { Wrapper, Container, Caption } from "./ui";

const Video = ({ src }) => {
  const [value, author] = src.split(/\n/);
  let authorDetails = {};
  if (author) {
    authorDetails = getAuthorDetails(author);
  }

  return (
    <Wrapper>
      <Container
        src={value}
        width="100%"
        controls
        autoplay
        loop
        playsinline
      ></Container>
      {authorDetails.name && authorDetails.url && (
        <Caption>
          Fonte: <A href={authorDetails.url}>{authorDetails.name}</A>
        </Caption>
      )}
    </Wrapper>
  );
};

export default Video;
