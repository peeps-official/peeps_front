// components/ui/card.js
import React from 'react';
import PropTypes from 'prop-types';

export const Card = ({ children }) => {
  return <div className="overflow-hidden bg-white rounded-lg shadow">{children}</div>;
};

export const CardHeader = ({ children }) => {
  return <div className="px-6 py-4 border-b border-gray-200">{children}</div>;
};

export const CardTitle = ({ children }) => {
  return <h3 className="text-lg font-semibold">{children}</h3>;
};

export const CardDescription = ({ children }) => {
  return <p className="text-gray-600">{children}</p>;
};

export const CardContent = ({ children }) => {
  return <div className="px-6 py-4">{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node,
};

CardHeader.propTypes = {
  children: PropTypes.node,
};

CardTitle.propTypes = {
  children: PropTypes.node,
};

CardDescription.propTypes = {
  children: PropTypes.node,
};

CardContent.propTypes = {
  children: PropTypes.node,
};
