import DiscordIcon from "./icons/Discord";
import FacebookIcon from "./icons/Facebook";
import InstagramIcon from "./icons/Instagram";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center pt-[35px] pb-[15px] z-10 bg-white">
      <h2 className="text-2xl text-moon_night">Get in touch with us!</h2>
      <div className="w-full flex justify-center items-center gap-[25px] md:gap-[50px] text-moon_night mt-6">
        <a
          href="https://discord.com/invite/yBE58rCxHx"
          className="relative group"
          target="_blank"
        >
          <div className="w-full relative h-full flex items-center justify-center bg-white z-50 rounded-[5px] group-hover:shadow-lg group-hover:-translate-y-0.5 px-2 py-1 transition-all duration-300 ease-in-out group-active:translate-y-0 group-active:shadow-none gap-2.5">
            <DiscordIcon />
            Discord
          </div>
          <span className="w-[96%] h-[96%] absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] bg-[#5865F2] z-0 group-hover:w-[calc(100%+2px)] group-hover:h-[calc(100%+2px)] transition-all duration-200 ease-in-out rounded-[5px] group-active:w-[97%] group-active:h-[97%]" />
        </a>
        <a
          href="https://www.instagram.com/moonwakegames"
          className="relative group"
          target="_blank"
        >
          <div className="w-full gap-2.5 relative h-full flex items-center justify-center bg-white z-50 rounded-[5px] group-hover:shadow-lg group-hover:-translate-y-0.5 px-2 py-1 transition-all duration-300 ease-in-out group-active:translate-y-0 group-active:shadow-none">
            <InstagramIcon />
            Instagram
          </div>
          <span className="w-[96%] h-[96%] absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] bg-gradient-to-tr from-[#fa8f21] to-[#8c3aaa] z-0 group-hover:w-[calc(100%+4px)] group-hover:h-[calc(100%+2px)] transition-all duration-200 ease-in-out rounded-[5px] group-active:w-[97%] group-active:h-[97%]" />
        </a>
        <a
          href="https://www.facebook.com/people/Moonwake-Games/100089456794453/?mibextid=LQQJ4d"
          className="relative group"
          target="_blank"
        >
          <div className="w-full gap-2.5 relative h-full flex items-center justify-center bg-white z-50 rounded-[5px] group-hover:shadow-lg group-hover:-translate-y-0.5 px-2 py-1 transition-all duration-300 ease-in-out group-active:translate-y-0 group-active:shadow-none">
            <FacebookIcon />
            Facebook
          </div>
          <span className="w-[96%] h-[96%] absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] bg-[#485a96] z-0 group-hover:w-[calc(100%+4px)] group-hover:h-[calc(100%+2px)] transition-all duration-200 ease-in-out rounded-[5px] group-active:w-[97%] group-active:h-[97%]" />
        </a>
      </div>
      <a
        href="/admin"
        className="text-xs text-moon_night mt-[50px] hover:underline"
      >
        Admin Login
      </a>
    </div>
  );
};

export default Footer;
