import { getAuthorDetails } from "../../../../helpers";
import { A } from "..";
import { Container, Caption } from "./ui";

const Img = ({ src, alt, title }) => {
  let authorDetails = {};
  if (title) {
    authorDetails = getAuthorDetails(title);
  }

  return (
    <Container>
      <img src={src} alt={alt} />
      {authorDetails.name && authorDetails.url && (
        <Caption>
          Fonte: <A href={authorDetails.url}>{authorDetails.name}</A>
        </Caption>
      )}
    </Container>
  );
};

export default Img;
