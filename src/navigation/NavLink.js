import React from 'react';

const ignoreClick = (e) => { e.preventDefault(); e.stopPropagation(); };

export const NavLink = (props) => (
  <li>
    <a href={ props.href || `#`  } title={ props.title || `` } onClick={ ignoreClick }>{ props.title || ``}</a>
  </li>
);
            