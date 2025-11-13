import React from 'react';
import {
  Navbar as MTNavbar,
  Collapse,
  Typography,
  IconButton,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const navList = (
    <ul className="flex flex-col gap-4 lg:flex-row lg:items-center">
      <Typography as="li" variant="small" className="p-1 font-medium">
        <Link
          to="/"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Home
        </Link>
      </Typography>

      <Typography as="li" variant="small" className="p-1 font-medium">
        <Link
          to="/allblogs"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Blog
        </Link>
      </Typography>

      <Typography as="li" variant="small" className="p-1 font-medium">
        <Link
          to="/about"
          className="text-white hover:text-gray-300 transition-colors"
        >
          About
        </Link>
      </Typography>

      <Typography as="li" variant="small" className="p-1 font-medium">
        <Link
          to="/contact"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Contact
        </Link>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <Link
          to="/adminlogin"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Admin Login
        </Link>
      </Typography>
    </ul>
  );

  return (
    <MTNavbar className="bg-gray-900 text-white px-6 py-3 rounded-none max-w-full border-none shadow-none">
      <div className="flex items-center justify-between">
        <Typography as={Link} to="/" className="text-2xl font-bold text-white">
          Blogify
        </Typography>

        <div className="hidden lg:block">{navList}</div>

        <IconButton
          variant="text"
          className="text-white lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>

      <Collapse open={openNav}>
        <div className="mt-4">{navList}</div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
