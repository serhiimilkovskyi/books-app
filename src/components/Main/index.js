import React from 'react';
import { Container } from 'react-bootstrap';
import { node, string, bool } from 'prop-types';

const Main = ({
  className, title, children, fluid,
}) => (
  <Container className={className} fluid={fluid}>
    <h5>{title}</h5>
    {children}
  </Container>
);

Main.propTypes = {
  className: string,
  title: string,
  children: node,
  fluid: bool,
};

Main.defaultProps = {
  className: '',
  title: '',
  children: null,
  fluid: false,
};

export default Main;
