export default function Input({
  type,
  id,
  value,
  label,
  placeholder,
  setHook,
  error,
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={(e) => setHook(e.currentTarget.value)}
        placeholder={placeholder?.length ? placeholder : "••••••••"}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-red-500 focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white"
        required=""
      ></input>
      {error?.length ? (
        <p className="text-red-500 text-xs mt-2">{error}</p>
      ) : (
        ""
      )}
    </div>
  );
}
