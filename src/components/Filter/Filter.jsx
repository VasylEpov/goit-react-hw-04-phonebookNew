import React from 'react';
import PropTypes from 'prop-types';
import { Div, Label, Input } from './Filter.styled';

const Filter = ({ value, onChange }) => (
  <Div>
    <Label>
      Filter
      <Input type="name" value={value} onChange={onChange} />
    </Label>
  </Div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
