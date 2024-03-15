import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import NavLink from "../layout/NavLink";
import Button from "../common/Button";
import logo from "../../../public/images/fire-ball.png";

export default function TopNav() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand href="/">
        <Image src={logo} className="mr-3 h-8 w-12" alt="YellowBall Logo" />
        {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span> */}
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button text={"Get started"} to={"/auth/signup"} />
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavLink to="/" text={"Home"}></NavLink>
        <NavLink to="/" text={"About"}></NavLink>
      </NavbarCollapse>
    </Navbar>
  );
}
