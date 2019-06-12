import React from 'react';
import { shape, string, func } from 'prop-types';
import { Form } from 'react-bootstrap';

const ModalForm = ({
  className, onChange, item,
}) => (
  <Form className={className} onChange={onChange}>
    <Form.Group controlId="formGroupTitle">
      <Form.Label>
        Title
        <sup>*</sup>
      </Form.Label>
      <Form.Control
        type="text"
        name="title"
        placeholder="Title"
        defaultValue={item.title}
      />
    </Form.Group>
    <Form.Group controlId="formGroupAuthor">
      <Form.Label>
        Author
        <sup>*</sup>
      </Form.Label>
      <Form.Control
        type="text"
        name="author"
        placeholder="Author"
        defaultValue={item.author}
      />
    </Form.Group>
    <Form.Group controlId="formGroupDate">
      <Form.Label>
        Date
        <sup>*</sup>
      </Form.Label>
      <Form.Control
        type="date"
        name="createdDate"
        placeholder="MM/DD/YYYY"
        defaultValue={item.createdDate}
      />
    </Form.Group>
  </Form>
);

ModalForm.propTypes = {
  item: shape({
    title: string,
  }),
  className: string,
  onChange: func,
};

ModalForm.defaultProps = {
  item: {},
  className: '',
  onChange: null,
};

export default ModalForm;
