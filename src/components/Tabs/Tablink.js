export const Tablink = ({ title, date, index, select }) => {
  const onClick = (e) => {
    select(index);
    /*
    * (function select(id) {
      this.setState({ id });
    })(index)
    *
    * */
    e.preventDefault();
  };
  return (
    <a
      href="#"
      onClick={onClick}
	  className="btn btn--tab"
	  title={date}
    >
      {title}
    </a>
  );
};
