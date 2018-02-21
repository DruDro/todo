
import { Navigation } from '../navigation/index';
import './header.scss';

export const Header = (props) => {
  return (
    <header className="header">
      <Navigation title={ props.title } />
    </header>
  );
};
