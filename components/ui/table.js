// components/ui/table.js
import React from 'react';
import PropTypes from 'prop-types';

export const Table = ({ children }) => {
  return <table className="min-w-full bg-white">{children}</table>;
};

export const TableHeader = ({ children }) => {
  return <thead>{children}</thead>;
};

export const TableRow = ({ children }) => {
  return <tr>{children}</tr>;
};

export const TableHead = ({ children }) => {
  return <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">{children}</th>;
};

export const TableBody = ({ children }) => {
  return <tbody>{children}</tbody>;
};

export const TableCell = ({ children }) => {
  return <td className="px-6 py-4 whitespace-nowrap">{children}</td>;
};

Table.propTypes = {
  children: PropTypes.node,
};

TableHeader.propTypes = {
  children: PropTypes.node,
};

TableRow.propTypes = {
  children: PropTypes.node,
};

TableHead.propTypes = {
  children: PropTypes.node,
};

TableBody.propTypes = {
  children: PropTypes.node,
};

TableCell.propTypes = {
  children: PropTypes.node,
};
