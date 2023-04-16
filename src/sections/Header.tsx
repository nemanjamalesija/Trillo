import { magnifyingGlassIcon } from '../components/Icons';
import { chatIcon, bookMarkIcon } from '../components/Icons';
import logo from '../img/logo.png';
import nemanja from '../img/nemanja.jpg';

const Header = () => {
  return (
    <header className='header'>
      <img src={logo} alt='trillo logo' className='logo' />
      <form action='#' className='search'>
        <input type='text' className='search__input' placeholder='Search hotels' />
        <button className='search__button'>{magnifyingGlassIcon}</button>
      </form>
      <nav className='user-nav'>
        <div className='user-nav__icon-box'>
          {bookMarkIcon}
          <span className='user-nav__notification'>7</span>
        </div>
        <div className='user-nav__icon-box'>
          {chatIcon}
          <span className='user-nav__notification'>13</span>
        </div>
        <div className='user-nav__user'>
          <img src={nemanja} alt='User Photo' className='user-nav__user-photo' />
          <span className='user_nav__user-name'>Nemanja</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
