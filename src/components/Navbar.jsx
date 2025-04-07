import InstagramIcon from "./canvas/icons/InstagramIcon";
// import DribbleIcon from "./canvas/icons/DribbleIcon";
import LinkedinIcon from "./canvas/icons/LinkedinIcon";
import GithubIcon from "./canvas/icons/GithubIcon";
import { Icon } from "./NavbarIcon";

const Navbar = () => {
  return (
    <header className="absolute top-0 w-full z-50 py-10 ">
      <div className="flex flex-col items-center md:flex-row md:w-full md:justify-between md:px-14 max-w-7xl  mx-auto">
        <div>
          <a href="#" className="text-xl">
            fullstack
            <span className="font-semibold text-[#915eff]">Rheina</span>
          </a>
        </div>
        <div className="flex items-center gap-2">
          {/* <Icon
            component={DribbleIcon}
            href="https://dribbble.com/frontendRheina"
          /> */}
          <Icon
            component={InstagramIcon}
            href="https://www.instagram.com/frontendRheina"
          />
          <Icon
            component={LinkedinIcon}
            href="https://www.linkedin.com/in/rheinatamara/"
          />
          <Icon component={GithubIcon} href="https://github.com/rheinatamara" />
        </div>
      </div>
    </header>
  );
};
export default Navbar;
