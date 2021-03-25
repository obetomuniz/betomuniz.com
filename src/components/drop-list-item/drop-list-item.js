import { Container, CTA } from './ui';

const DropListItem = ({ data }) => {
  const { title, slug } = data;

  return (
    <Container>
      <CTA title={`${title}`} href={`/drops/${slug}`}>
        {title}
      </CTA>
    </Container>
  );
};

export default DropListItem;
