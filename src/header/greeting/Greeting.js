
import './greeting.scss';

const time = () => {
  const now = (new Date()).getHours();
  let timeDayNight;
  if (22 <= now || now < 3) {
    timeDayNight = 'night';
  } else if (3 <= now && now < 12) {
    timeDayNight = 'morning';
  } else if (12 <= now && now < 18) {
    timeDayNight = 'afternoon';
  } else if (18 <= now && now < 22) {
    timeDayNight = 'evening';
  }
  return timeDayNight;
};

export const Greeting = (props) => {
  let name = props.name
    ? props.name
    : localStorage.getItem("promptName")
      ? localStorage.getItem("promptName")
      : '';
  if (!name) {
    localStorage.setItem("promptName", prompt("What is your name?"));
    name = localStorage.getItem("promptName")
      ? localStorage.getItem("promptName")
      : '';
  }
  return (
    <div className="greeting">
      {`Good ${time()}${name
        ? `, ${name}`
        : ''}!`}
    </div>
  )
};

Greeting.propTypes = {
  name: PropTypes.string.isRequired
};