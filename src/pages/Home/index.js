import React, { Component, Fragment } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Navbar, Button } from 'react-bootstrap';
import Header from '../../components/Header';
import Main from '../../components/Main';
import List from '../../components/List';
import list from '../../utils/apiResponse';
import { fetchBookList } from '../../actions/book';

class Home extends Component {
  static propTypes = {
    fetchBookList: func.isRequired,
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modal: {
        title: 'Edit book',
        okButton: 'Save Changes',
      },
    };
  }

  componentDidMount() {
    this.props.fetchBookList();
  }

  handleOnEdit = () => {
    this.handleShow({
      title: 'Edit book',
      okButton: 'Save Changes',
    });
  }

  handleOnAdd = () => {
    this.handleShow({
      title: 'Add book',
      okButton: 'Add',
    });
  }

  handleClose = () => this.setState({ showModal: false });

  handleOk = () => {

  }

  handleShow = (modal) => {
    this.setState({
      showModal: true,
      modal,
    });
  };

  render() {
    const { showModal, modal } = this.state;
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
            list={list.map(item => ({
              ...item,
              description: item.author,
            }))}
            showAddCard
          />
        </Main>

        <Modal show={showModal} onHide={this.handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{modal.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" size="sm" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="success" size="sm" onClick={this.handleOk}>{modal.okButton}</Button>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
