import React from 'react';
import {
  shape, string, number, func, bool,
} from 'prop-types';

const ListItem = ({
  className, item, onEdit, onAdd, hideMedia,
}) => (
  <li className="list-item-wrapper">
    <div className={`list-item-container ${className}`}>
      {!hideMedia && (
        <div className="list-item-media">
          <img src={item.imageSrc} alt={item.title} />
          {onEdit && (
            <div className="list-item-action">
              <i onClick={onEdit} role="presentation" className="icon-edit">&#9998;</i>
            </div>
          )}
        </div>
      )}
      {!onAdd
        ? (
          <div className="list-item-content">
            <span className="list-item-title">{item.title}</span>
            <p className="list-item-description">{item.description}</p>
          </div>
        )
        : (
          <div onClick={onAdd} role="presentation" className="list-item-content-empty">
            <i className="icon-plus">+</i>
          </div>
        )
      }
    </div>
  </li>
);

ListItem.propTypes = {
  hideMedia: bool,
  item: shape({
    id: number,
    imageSrc: string,
  }),
  className: string,
  onEdit: func,
  onAdd: func,
};

ListItem.defaultProps = {
  className: '',
  item: {},
  onAdd: null,
  onEdit: null,
  hideMedia: false,
};

export default ListItem;
