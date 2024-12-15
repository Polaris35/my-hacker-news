import { Header } from "../components";
import { Footer } from "../components/footer";

export function MainPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:w-[85%] min-w-[796px] md:mx-auto min-h-screen bg-gray-100 md:pt-2">
      <Header />
      <div className="p-1 flex-1">{children}</div>
      <Footer />
    </div>
  );
}
