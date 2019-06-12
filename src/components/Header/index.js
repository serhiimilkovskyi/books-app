import React from 'react';
import { Container } from 'react-bootstrap';
import { node, string, bool } from 'prop-types';

const Header = ({
  className, containerClassName, children, fluid,
}) => (
  <header className={`header ${className}`}>
    <Container className={`header-container ${containerClassName}`} fluid={fluid}>
      {children}
    </Container>
  </header>
);

Header.propTypes = {
  className: string,
  containerClassName: string,
  children: node,
  fluid: bool,
};

Header.defaultProps = {
  className: '',
  containerClassName: '',
  children: null,
  fluid: false,
};

export default Header;
