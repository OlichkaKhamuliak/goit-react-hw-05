import css from './Header.module.css';
import clsx from 'clsx';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const Header = () => {
  return (
    <div>
      <header>
        <nav className={css.nav}>
          <ul className={css.list}>
            <li>
              <NavLink to="/" className={buildLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies" className={buildLinkClass}>
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
