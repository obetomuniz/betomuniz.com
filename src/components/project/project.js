import { Container, Thumb, Infos, Name, Desc, CTA } from './ui';

const Project = ({ data }) => {
  const { featured, name, description, link } = data;

  return (
    <Container>
      <Thumb>
        <img alt={`${name} Logo`} src={featured} />
      </Thumb>
      <Infos>
        <Name>{name}</Name>
        <Desc>{description}</Desc>
        <CTA
          title={`${name}`}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </CTA>
      </Infos>
    </Container>
  );
};

export default Project;
