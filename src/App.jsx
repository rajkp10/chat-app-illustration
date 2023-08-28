import Hero from "./components/Hero";
import Mobile from "./components/Mobile";

function App() {
  return (
    <main className="px-8 py-14 md:p-0 relative overflow-x-hidden w-full min-h-screen grid place-content-center bg-gray-50 after:absolute after:h-[55%] after:w-full after:bg-gradient-to-b  after:from-gradientColor1 after:from-[-30%] after:to-gradientColor2 after:rounded-b-full after:-left-1/2 md:after:-left-16 md:after:h-[85%] md:after:w-[30%] before:absolute before:h-[55%] before:w-full before:-right-1/2 before:bottom-0 before:bg-appBackground before:rounded-t-full md:before:-right-36 md:before:h-[85%] md:before:w-[30%]">
      <div className="z-10 flex flex-col items-center justify-center max-w-5xl gap-20 md:gap-10 md:flex-row">
        <Mobile />
        <Hero />
      </div>
    </main>
  );
}

export default App;
