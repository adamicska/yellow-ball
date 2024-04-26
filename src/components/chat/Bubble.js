export default function Message({ message, isMe, isOpen, setIsOpen }) {
  return (
    <div className={`${isMe ? "ml-auto" : "mr-auto"} mt-4`}>
      {/* <span className="text-xs font-normal text-gray-500 dark:text-gray-400">
        {message.createdAt}
      </span> */}
      <div
        className={`flex ${isMe ? "flex-row-reverse" : "items-start"} gap-2.5`}
      >
        <img
          className="w-8 h-8 rounded-full"
          src={`https://robohash.org/${message?.owner}.png?size=200x200`}
          alt={message?.owner}
        />
        <div
          className={`flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-b-xl ${
            isMe ? "rounded-tl-xl" : "rounded-tr-xl"
          } dark:bg-gray-700`}
        >
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              {message?.owner}
            </span>
          </div>
          <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
            {message?.message}
          </p>
        </div>
        <button
          id="dropdownMenuIconButton"
          data-dropdown-toggle="dropdownDots"
          data-dropdown-placement="bottom-start"
          className={`${
            !isMe ? "hidden" : "inline-flex"
          } self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600`}
          type="button"
          onClick={() => setIsOpen(isOpen === message.id ? "" : message.id)}
        >
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 4 15"
          >
            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
          </svg>
        </button>
        <div
          id="dropdownDots"
          className={`z-10 ${
            isOpen === message.id ? "fixed" : "hidden"
          } bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600`}
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownMenuIconButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Reply
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Forward
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Copy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Delete
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
