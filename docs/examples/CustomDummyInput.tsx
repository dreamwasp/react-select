import React from 'react';
import Select, { components, DummyInputProps } from 'react-select';
import {colourOptions } from '../data';

const DummyInput = (props: DummyInputProps) => {
  return (
      <components.DummyInput {...props} my-custom-prop="id"/>
  );
};

export default () => (
  <Select
    closeMenuOnSelect={false}
    components={{ DummyInput }}
    defaultValue={colourOptions[4]}
    isSearchable={false}
    options={colourOptions}
  />
);
