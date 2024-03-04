import MyGridLayout from "./components/grid-layout";

export default function Home() {
  return (
    <main className="antialiased flex min-h-screen flex-col ">
      <div className="flex-auto animate-fade-in-slide-down relative mx-auto mt-[50px] pb-20 xl:w-[1200px] md:w-[768px] w-[376px] max-w-[1280px]">
        <MyGridLayout />
      </div>
    </main>
  );
}
