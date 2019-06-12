import React, { Component, Fragment } from 'react';
import {
  func, number, shape, arrayOf,
} from 'prop-types';
import { connect } from 'react-redux';
import {
  Modal, Navbar, Button, Alert,
} from 'react-bootstrap';
import Header from '../../components/Header';
import Main from '../../components/Main';
import List from '../../components/List';
import ModalForm from './components/ModalForm';
import { fetchBookList, updateBook, deleteBook } from '../../actions/book';
import capitalizeString from '../../utils/capitalizeString';

class Home extends Component {
  static propTypes = {
    book: shape({
      list: arrayOf(shape({
        id: number,
      })),
    }).isRequired,
    fetchBookList: func.isRequired,
    updateBook: func.isRequired,
    deleteBook: func.isRequired,
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modal: {
        title: 'Edit book',
        okButton: 'Save Changes',
        content: '',
      },
      updatedBook: {
        title: '',
        author: '',
        createdDate: '',
      },
      errorMessage: '',
    };
  }

  componentDidMount() {
    this.props.fetchBookList();
  }

  handleOnEdit = (selected) => {
    this.setState({ selected }, () => {
      this.handleShow({
        title: 'Edit book',
        okButton: 'Save Changes',
      });
    });
  }

  handleOnAdd = () => {
    this.handleShow({
      title: 'Add book',
      okButton: 'Add',
    });
  }

  handleClose = () => this.setState({
    showModal: false,
    selected: {},
    updatedBook: {},
    modal: {},
    errorMessage: '',
  });

  handleOk = () => {
    const { updatedBook } = this.state;
    const hasError = Object.keys(updatedBook).map((key) => {
      if (!updatedBook[key]) return false;
      return true;
    }).includes(false);
    if (!hasError) {
      const formattedTitle = capitalizeString(updatedBook.title.replace(/[^a-zA-Z ]/g, ''));
      updatedBook.title = formattedTitle;
      this.props.updateBook(updatedBook);
      this.handleClose();
    }

    if (hasError) {
      this.setState({
        errorMessage: 'All fields are required',
      });
    }
  }

  handleOnDelete = (selected) => {
    this.setState({ selected }, () => {
      this.handleShow({
        title: 'Delete book',
        okButton: 'Delete',
        content: 'Are you sure you want to remove this book?',
      });
    });
  }

  handleDelete = () => {
    const { selected } = this.state;
    this.props.deleteBook(selected);
    this.handleClose();
  }

  onChange = (e) => {
    const { selected, updatedBook } = this.state;
    const book = {
      ...selected,
      ...updatedBook,
      [e.target.name]: e.target.value,
    };
    this.setState({ updatedBook: book });
  }

  handleShow = (modal) => {
    this.setState({
      showModal: true,
      modal,
    });
  };

  render() {
    const {
      showModal, modal, selected, errorMessage,
    } = this.state;
    const { book } = this.props;
    return (
      <Fragment>
        <Header fluid>
          <Navbar bg="dark">
            <Navbar.Brand href="#home">BL</Navbar.Brand>
          </Navbar>
        </Header>

        <Main
          className="container-sm"
          title="Books Library"
        >
          <List
            className="list-wrap"
            itemClassName="list-item-card"
            onEdit={this.handleOnEdit}
            onAdd={this.handleOnAdd}
            onDelete={this.handleOnDelete}
            list={book.list.map(item => ({
              ...item,
              mediaTitle: item.createdDate,
              description: item.author,
            }))}
            showAddCard
          />
        </Main>

        <Modal show={showModal} onHide={this.handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{modal.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {errorMessage && <Alert className="alert-sm" variant="danger">{errorMessage}</Alert>}
            {
              !modal.content
                ? (
                  <ModalForm
                    item={selected}
                    onChange={this.onChange}
                  />
                )
                : modal.content
            }
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" size="sm" onClick={this.handleClose}>
              Close
            </Button>
            {
              !modal.content
                ? <Button variant="success" size="sm" onClick={this.handleOk}>{modal.okButton}</Button>
                : <Button variant="danger" size="sm" onClick={this.handleDelete}>{modal.okButton}</Button>
            }
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ book }) => ({
  book,
});

const mapDispatchToProps = {
  fetchBookList,
  updateBook,
  deleteBook,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
