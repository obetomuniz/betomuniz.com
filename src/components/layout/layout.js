import { forwardRef } from 'react';
import { Header, Footer } from '..';

import Theme from './theme';
import { NormalizedStyles, Container } from './ui';

const Layout = (
  {
    children,
    containerAs = 'div',
    socials,
    bottomNewsletter,
    hideHeader,
    hideFooter,
  },
  ref
) => (
  <>
    <Theme />
    <NormalizedStyles />
    {!hideHeader && <Header>{socials && socials()}</Header>}
    <Container ref={ref} as={containerAs}>
      {children}
    </Container>
    {bottomNewsletter && bottomNewsletter()}
    {!hideFooter && <Footer />}
  </>
);

export default forwardRef(Layout);
