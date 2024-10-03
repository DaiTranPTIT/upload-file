import { Outlet } from "react-router-dom";
import SecondHeader from "@/components/SecondHeader";

const DashboardLayout = () => {
  return (
    <div className="bg-base min-h-screen flex flex-col">
      <header className="w-full">
        <SecondHeader />
      </header>
      <main className="mb-2 mx-4 bg-white rounded-2xl flex-grow p-4 border">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;