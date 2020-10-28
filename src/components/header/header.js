import Link from "next/link";
import { Container, Photo, PhotoImage } from "./ui";

const Header = ({ children }) => {
  return (
    <Container>
      <Link href="/">
        <Photo>
          <PhotoImage
            loading="lazy"
            alt="Beto Muniz"
            src="https://www.gravatar.com/avatar/fff7258836f20ea66b061b49a51fe8dd?s=170"
            width="80"
            height="80"
          />
        </Photo>
      </Link>

      {children}
    </Container>
  );
};

export default Header;
