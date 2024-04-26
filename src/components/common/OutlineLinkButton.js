import Link from "next/link";

export default function Button({ to, text }) {
  return (
    <>
      <Link href={to}>
        <div className="w-full text-white font-medium rounded-full p-[3px] mx-auto text-sm text-center bg-gradient-to-r from-red-500 to-yellow-500 hover:from-yellow-500 hover:to-red-500">
          <div className="w-full bg-white dark:bg-gray-800 text-black dark:text-white rounded-full p-[11px] hover:bg-gray-100">
            <div className="items-center">{text}</div>
          </div>
        </div>
      </Link>
    </>
  );
}
