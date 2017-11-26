import React from 'react';

export const NavLink = (props) => (
  <li>
    <a className="btn" href={ props.href || `#`  } title={ props.title || `` }>{ props.title || ``}</a>
  </li>
);
            