import { RiMenu2Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import '../App.css'

const Navbar = () => {
  return (
    <>

      <nav className="navbar pl-5 pr-10 md:hidden bg-base-100 flex justify-between w-full z-[500]">

        <div className="dropdown">

          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">

            <RiMenu2Fill className="text-lg" />
            
          </div>

          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            
            <NavLink to="/">Home</NavLink>
            
            <NavLink to="/templates">Templates</NavLink>

          </ul>

        </div>

        <a className="text-lg">Resumer Builder</a>

      </nav>

      <nav className="px-20 py-3 hidden md:flex justify-between">

        <a className="text-lg">Resumer Builder</a>

        <ul className="flex items-center gap-3">

          <NavLink to="/"  className="">Home</NavLink>

          <NavLink to="/templates">Templates</NavLink>

        </ul>

      </nav>
      
    </>
  )
}

export default Navbar