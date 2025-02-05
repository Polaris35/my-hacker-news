import { Outlet } from "react-router";
import { Header, Footer } from "@components";

export function MainPageLayout() {
  return (
    <div className="flex flex-col md:w-[85%] min-w-[796px] md:mx-auto min-h-screen bg-gray-100 md:pt-2">
      <Header />
      <main className="p-1 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
