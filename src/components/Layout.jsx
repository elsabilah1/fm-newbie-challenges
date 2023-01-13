import { Link, Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
  const { pathname } = useLocation()
  return (
    <>
      {!(pathname === '/') && (
        <Link to='/'>
          <div className='z-50 m-3 absolute bg-white h-14 w-14 grid place-items-center rounded-full text-xs font-bold shadow border'>
            Go Back
          </div>
        </Link>
      )}
      <Outlet />
    </>
  )
}

export default Layout
