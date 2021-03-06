import React, { Fragment } from 'react';
import {
  shape, string, arrayOf, number, func, bool,
} from 'prop-types';
import ListItem from '../ListItem';

const List = ({
  className, itemClassName, list, onEdit, onAdd, showAddCard, onDelete,
}) => (
  <ul className={`list ${className}`}>
    <Fragment>
      {list && list.length > 0 && list.map(item => (
        <ListItem
          className={itemClassName}
          key={item.id}
          onEdit={onEdit}
          onDelete={onDelete}
          item={item}
        />
      ))}
      {showAddCard && (
        <ListItem
          hideMedia
          className={`list-item-card-empty ${itemClassName}`}
          onAdd={onAdd}
        />
      )}
    </Fragment>
  </ul>
);

List.propTypes = {
  showAddCard: bool,
  list: arrayOf(shape({
    id: number,
  })).isRequired,
  className: string,
  itemClassName: string,
  onEdit: func,
  onAdd: func,
  onDelete: func,
};

List.defaultProps = {
  showAddCard: false,
  className: '',
  itemClassName: '',
  onAdd: null,
  onEdit: null,
  onDelete: null,
};

export default List;
