import { Wrapper } from "./ui";

const YouTube = ({ src }) => {
  return (
    <Wrapper>
      <iframe
        src={`https://www.youtube.com/embed/${src}`}
        width="100%"
        height="500"
      ></iframe>
    </Wrapper>
  );
};

export default YouTube;
