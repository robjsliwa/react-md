/* eslint-disable max-len */
import React from 'react';
import SVGIcon from 'react-md/lib/SVGIcons';

const MenuIcon = props => (
  <SVGIcon {...props}>
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </SVGIcon>
);

const Simple = () => (
  <div>
    <MenuIcon />
    <MenuIcon size={48} />
    <MenuIcon />
    <MenuIcon />
  </div>
);

export default Simple;
