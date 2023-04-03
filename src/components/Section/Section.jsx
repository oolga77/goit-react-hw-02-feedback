import propTypes from 'prop-types';
import React from 'react';
import { TitleItem } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <div>
      <TitleItem>{title}</TitleItem>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};
