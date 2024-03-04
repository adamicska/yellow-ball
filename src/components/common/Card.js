import Image from "next/image";
import ball from "../../../public/images/fire-ball.png";

export default function Card({ children, logo, title }) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-auto md:py-8 mx-auto h-screen">
      {logo ? <Image src={ball} alt="logo" className="w-16 mb-4" /> : null}
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 sm:p-8">
          {" "}
          <div className="text-center mb-4">
            <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              {title}
            </h2>
          </div>
          <form className="space-y-8 md:space-y-6" action="#">
            {children}
          </form>
        </div>
      </div>
    </div>
  );
}
