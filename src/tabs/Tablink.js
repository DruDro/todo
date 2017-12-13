export const Tablink = ({ title, index, select }) => {
    const onClick = (e) => {
        select(index);
        e.preventDefault();
    };
    return <a href="#" onClick={onClick} className="btn btn--tab">{title}</a>;
};