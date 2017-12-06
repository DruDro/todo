

export const NavLink = (props) => (
        <a  className="btn" 
            href={ props.href || `#` } 
            title={ props.title || `` } >
            { props.title || `` }
        </a>
);
