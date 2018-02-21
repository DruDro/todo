
import { Navigation } from '../navigation/index';
import './header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Navigation />
      </div>
    </header>
  );
};
