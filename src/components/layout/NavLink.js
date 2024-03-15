import Link from "next/link";

export default function NavLink({ to, text }) {
  return (
    <>
      <Link href={to}>
        <div className="w-full font-medium rounded-full p-[3px] mx-auto text-sm text-center ">
          <div className="w-full bg-white dark:bg-gray-800 text-black dark:text-white rounded-full p-[11px] hover:bg-yellow-100">
            <div className="items-center">{text}</div>
          </div>
        </div>
      </Link>
    </>
  );
}