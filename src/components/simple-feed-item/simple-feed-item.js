import Link from "next/link";
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
      <Link href={`/drops/${slug}`} as={`/drops/${slug}`} title={customTitle}>
        <A>{customTitle}</A>
      </Link>
    </Container>
  );
};

export default SimpleFeedItem;
