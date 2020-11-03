import { Container, A, Category } from "./ui";

const SimpleFeedItem = ({ data }) => {
  const {
    data: { title, subtitle, category },
    slug,
  } = data;
  let customTitle = title;

  if (subtitle) {
    customTitle = `${customTitle}: ${subtitle}`;
  }

  return (
    <Container>
      <Category color={`--CATEGORY_${category.toUpperCase()}_COLOR`}>
        {category.replace("_", " ")}
      </Category>
      <A href={`/drops/${slug}`} title={customTitle}>
        {customTitle}
      </A>
    </Container>
  );
};

export default SimpleFeedItem;
