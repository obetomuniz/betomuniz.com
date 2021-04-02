import { Container, Photo, PhotoImage } from './ui';
import siteConfigs from '../../metadata/site.json';

const Header = ({ children }) => {
  return (
    <Container>
      <Photo href="/">
        <PhotoImage
          loading="lazy"
          alt="Beto Muniz"
          src={siteConfigs.gravatar}
          width="80"
          height="80"
        />
      </Photo>

      {children}
    </Container>
  );
};

export default Header;
