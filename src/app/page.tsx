import Layout from "./components/Layout";
import Carousel from "./components/ui/Carousel";

const Home = () => {
  return (
    <Layout>
      <div className="relative flex flex-col items-center w-full pb-[35px] overflow-x-hidden">
        <video
          className="w-full min-w-[1600px] absolute z-0"
          loop
          autoPlay
          preload="auto"
          muted
        >
          <source src="/bgVideo.mp4" type="video/mp4" />
        </video>
        <Carousel classname="mt-[50px] z-10 " />
        <div className="w-full max-w-[1340px] flex flex-col items-center mx-auto p-[15px] bg-black/60 z-10 mt-[50px] rounded-2xl">
          <h1 className="text-moon_yellow text-4xl font-semibold text-center">
            Welcome to Moonwake Games
          </h1>
          <p className="text-xl text-moon_yellow font-bold text-center mt-[50px]">
            Stay updated with our{" "}
            <a href="/calendar" className="underline">
              Calendar
            </a>
          </p>
          <p className="text-xl text-moon_yellow font-bold text-center mt-1.5">
            If you have questions give us a call or check out our{" "}
            <a href="/shop-policies" className="underline">
              Store Policies
            </a>
            . Let the adventures begin!
          </p>
          <h2 className="text-moon_yellow mt-[50px] text-2xl font-semibold">
            Hours:
          </h2>
          <p className="text-xl text-moon_yellow font-bold text-center mt-1.5">
            Monday: 11 AM – 10 PM
          </p>
          <p className="text-xl text-moon_yellow font-bold text-center mt-1.5">
            Tuesday: 11 AM – 10 PM
          </p>
          <p className="text-xl text-moon_yellow font-bold text-center mt-1.5">
            Wednesday: 11 AM – 10 PM
          </p>
          <p className="text-xl text-moon_yellow font-bold text-center mt-1.5">
            Thursday: 11 AM – 10 PM
          </p>
          <p className="text-xl text-moon_yellow font-bold text-center mt-1.5">
            Friday: 11 AM – 10 PM
          </p>
          <p className="text-xl text-moon_yellow font-bold text-center mt-1.5">
            Saturday: 11 AM – 10 PM
          </p>
          <p className="text-xl text-moon_yellow font-bold text-center mt-1.5">
            Sunday: 12 PM – 5 PM
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
