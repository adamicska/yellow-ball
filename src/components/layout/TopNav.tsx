// import Image from "next/image";
"use client";
import { signOut } from "aws-amplify/auth";
import { useRouter } from "next/navigation";

import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import NavLink from "../layout/NavLink";
import Button from "../common/OutlineLinkButton";
// import logo from "../../../public/images/fire-ball.png";

export default function TopNav() {
  const router = useRouter();
  async function handleSignOut() {
    try {
      await signOut();
      router.push("/");
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }
  return (
    <Navbar fluid rounded className="fixed w-full z-20 top-0 start-0">
      <NavbarBrand href="/" className="mx-auto pl-10 sm:mx-0 sm:mr-auto">
        {/* <Image src={logo} className="mr-3 h-8 w-12" alt="YellowBall Logo" /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="rgb(250 202 21)"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="black"
          className="w-6 h-6 rounded-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
          />
        </svg>

        {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span> */}
      </NavbarBrand>
      <div className="flex md:order-2">
        <div className="hidden lg:block">
          <Button text={"Get started"} to={"/auth/signup"} />
        </div>

        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavLink to="/" text={"Home"}></NavLink>
        <NavLink to="/" text={"About"}></NavLink>
        <div className="w-full font-medium rounded-full p-[3px] mx-auto text-sm text-center ">
          <div className="w-full bg-white dark:bg-gray-800 text-black dark:text-white rounded-full p-[11px] hover:bg-yellow-200">
            <button className="items-center" onClick={() => handleSignOut()}>
              Logout
            </button>
          </div>
        </div>
      </NavbarCollapse>
    </Navbar>
  );
}
