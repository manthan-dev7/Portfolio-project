import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { element } from 'prop-types';

// import './portNav.scss';
// import Menu from '../../public/svg/menu-outline.svg';
// import Button from '../Button';
// import PortText from '../PortText';

const Navigation = ({ whiteHeader }) => {
  // const onMenuPress = () => {
  //   let x = document.getElementById('NavbarModal');
  //   console.log('NavbarModal');
  //   if (x.className === styles.portNav) {
  //     return (x.className = styles.portHiddenNav);
  //   } else {
  //     return (x.className = styles.portNav);
  //   }
  // };

  const navbarRef = useRef(null);
  const ulRef = useRef(null);
  const collapseRef = useRef(null);
  const { pathname } = useRouter();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= 60) {
        navbarRef.current.classList.add('fixed-header');
        ulRef.current.classList.add('nav-transparent');
      } else {
        navbarRef.current.classList.remove('fixed-header');
        ulRef.current.classList.remove('nav-transparent');
      }
    };
    window.addEventListener('scroll', onScroll, false);
    return () => {
      window.removeEventListener('scroll', onScroll, false);
    };
  }, []);

  const toggleNavbar = () => {
    // e.preventDefault();
    // collapseRef.current.classList.toggle('show');
    const element = document.getElementById('navbarYagnesh');
    if (ReactDOM.findDOMNode(element).style.display === 'none') {
      ReactDOM.findDOMNode(element).style.display = 'flex';
    } else {
      ReactDOM.findDOMNode(element).style.display = 'none';
    }
    window.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        const element = document.getElementById('navbarYagnesh');
        if (ReactDOM.findDOMNode(element).style.display === 'flex') {
          ReactDOM.findDOMNode(element).style.display = 'none';
        }
      }
    });
  };
  return (
    <header>
      <nav
        className={classNames(
          'navbar',
          'header-nav',
          'fixed-top',
          'navbar-expand-lg',
          'header-nav-white',
        )}
        ref={navbarRef}>
        <div className="container">
          <div className="sub-container">
            {/* Brand */}
            <Link href="/">
              <a className="navbar-brand">
                Devanshi
                {/* <span className="theme-bg" /> */}
              </a>
            </Link>

            {/* / */}
            {/* Mobile Toggle */}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarYagnesh"
              aria-controls="navbarYagnesh"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={toggleNavbar}>
              <span />
              <span />
              <span />
            </button>
          </div>
          {/* / */}
          {/* Top Menu */}
          <div className="navbar-collapse" ref={collapseRef} id="navbarYagnesh">
            {/* <a href="#!" onClick={toggleNavbar} className="blankSpace" /> */}
            <button onClick={toggleNavbar} className="blankSpace" />
            <ul ref={ulRef} className="navbar-nav">
              <li>
                <Link href="http://localhost:3000/#Home">
                  <a
                    className={classNames('nav-link-white', { active: pathname === '#Home' })}
                    onClick={toggleNavbar}>
                    Home
                  </a>
                </Link>
              </li>
              {/* <li>
                <Link href="/about">
                  <a className={classNames('nav-link', { active: pathname === '/about' })}>About</a>
                </Link>
              </li> */}
              <li>
                <Link href="http://localhost:3000/#About">
                  <a
                    className={classNames('nav-link-white', { active: pathname === '#About' })}
                    onClick={toggleNavbar}>
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link href="http://localhost:3000/#Services">
                  <a
                    className={classNames('nav-link-white', { active: pathname === '#Services' })}
                    onClick={toggleNavbar}>
                    Services
                  </a>
                </Link>
              </li>
              <li>
                <Link href="http://localhost:3000/#Work">
                  <a
                    className={classNames('nav-link-white', { active: pathname === '#Work' })}
                    onClick={toggleNavbar}>
                    Work
                  </a>
                </Link>
              </li>
              <li>
                <Link href="http://localhost:3000/#Contact">
                  <a
                    className={classNames('nav-link-white', { active: pathname === '#Contact' })}
                    onClick={toggleNavbar}>
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          {/* / */}
        </div>
        {/* Container */}
      </nav>
      {/* Navbar */}
    </header>
  );
};

export default Navigation;
