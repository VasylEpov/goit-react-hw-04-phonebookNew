import React from 'react';
import { Item, Button } from './ContactItem.styled';
import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <Item>
      <p>
        {name}............
        {number}
      </p>
      <Button type="submit" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
