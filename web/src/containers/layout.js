import React from 'react';
import { Navigation, NavigationTypography } from '../components/Navigation';
import Anchor from '../components/Anchor';

const links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
];

const Navbar = () => (
  <Navigation
    links={links.map((link) => {
      const { name, href } = link;
      return (
        <Anchor key={name} href={href}>
          <NavigationTypography variant="subtitle2" color="textSecondary">
            {name}
          </NavigationTypography>
        </Anchor>
      );
    })}
  />
);

const LayoutContainer = ({children}) => (
    <>
    <Navbar/>
      {children}
    <footer>Footer</footer>
    </>
  )

export default LayoutContainer
