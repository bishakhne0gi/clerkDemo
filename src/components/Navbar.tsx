import { ModeToggle } from "./mode-toggle";
import { NavLink } from "react-router-dom";
import { UserButton, useClerk } from "@clerk/clerk-react";
import { ClerkBtn } from ".";

const Navbar = () => {
  const { user } = useClerk();
  const email = user?.primaryEmailAddress?.emailAddress;

  return (
    <>
      <div className='flex w-full px-[56px] py-[30px] items-center text-[#ACACAC]  text-general'>
        <div className='basis-1/5'>
          <ModeToggle />
        </div>
        <div className='basis-1/2 flex justify-center space-x-[10px] '>
          <NavLink to='/' className='hover:text-[#3f3f3f]'>
            Home
          </NavLink>
          <NavLink to='/collab' className='hover:text-[#3f3f3f]'>
            Collaboration
          </NavLink>
        </div>
        <div className='flex basis-1/3 justify-end space-x-[10px] hover:text-[#3f3f3f]'>
          {user ? (
            <>
              <NavLink to='/dashboard'>
                <span className='text-[#ACACAC] hover:text-[#3f3f3f]'>
                  {email}
                </span>
              </NavLink>
              <UserButton afterSignOutUrl='/' />
            </>
          ) : (
            <ClerkBtn />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
