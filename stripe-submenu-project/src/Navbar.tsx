import { FaBars } from 'react-icons/fa';
import { useAppContext } from './AppContextProvider';
import logo from './images/logo.svg';
import sublinks from './data';

const Navbar = () => {
  const { openSidebar } = useAppContext();

  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='' />
          <button className='btn toggle-btn' onClick={openSidebar}>
            <span>
              <FaBars />
            </span>
          </button>
        </div>

        <ul className='nav-links'>
          {sublinks.map((singleSublink) => {
            return (
              <li key={singleSublink.sublinkId}>
                <button className='link-btn' data-id={singleSublink.sublinkId}>
                  {singleSublink.page}
                </button>
              </li>
            );
          })}
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
