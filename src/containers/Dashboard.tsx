import { useUser } from "@clerk/clerk-react";

const Dashboard = () => {
  const { user } = useUser();

  // const email = user?.primaryEmailAddress?.emailAddress;
  const name = user?.fullName;
  return (
    <>
      <div className='font-general h-lvh flex items-center justify-center text-[50px] font-bold'>
        dashboard of{" "}
        <span className='px-[30px] text-[#ACACAC] gap-10 font-thin text-[70px] font-abc'>
          {" "}
          {name}{" "}
        </span>
      </div>
    </>
  );
};

export default Dashboard;
