// components/ui/dropdown-menu.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const DropdownMenu = ({ children }) => {
  return <div className="relative">{children}</div>;
};

export const DropdownMenuTrigger = ({ children, asChild }) => {
  return <div className="cursor-pointer">{children}</div>;
};

export const DropdownMenuContent = ({ children, align }) => {
  return (
    <div className={`absolute ${align === 'end' ? 'right-0' : 'left-0'} mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg`}>
      {children}
    </div>
  );
};

export const DropdownMenuLabel = ({ children }) => {
  return <div className="px-4 py-2 font-semibold text-gray-900">{children}</div>;
};

export const DropdownMenuSeparator = () => {
  return <div className="my-2 border-t border-gray-200"></div>;
};

export const DropdownMenuItem = ({ children }) => {
  return (
    <div className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100">
      {children}
    </div>
  );
};

DropdownMenu.propTypes = {
  children: PropTypes.node,
};

DropdownMenuTrigger.propTypes = {
  children: PropTypes.node,
  asChild: PropTypes.bool,
};

DropdownMenuContent.propTypes = {
  children: PropTypes.node,
  align: PropTypes.string,
};

DropdownMenuLabel.propTypes = {
  children: PropTypes.node,
};

DropdownMenuItem.propTypes = {
  children: PropTypes.node,
};
