import { homeIcon, airplaneIcon, keyIcon, mapIcon } from '../components/Icons';

const Sidebar = () => {
  return (
    <nav className='sidebar'>
      <ul className='side-nav'>
        <li className='side-nav__item side-nav__item--active'>
          <a href='#' className='side-nav__link'>
            {homeIcon}
            <span>Hotel</span>
          </a>
        </li>
        <li className='side-nav__item'>
          <a href='#' className='side-nav__link'>
            {airplaneIcon}
            <span>Flight</span>
          </a>
        </li>
        <li className='side-nav__item'>
          <a href='#' className='side-nav__link'>
            {keyIcon}
            <span>Car rental</span>
          </a>
        </li>
        <li className='side-nav__item'>
          <a href='#' className='side-nav__link'>
            {mapIcon}
            <span>Tours</span>
          </a>
        </li>
      </ul>
      <div className='legal'>&copy; 2023 by trillo. All rights reserved.</div>
    </nav>
  );
};

export default Sidebar;
