"use client";
import { useEffect, useState, useContext } from "react";
import { generateClient } from "aws-amplify/api";
import { createPlayer } from "../../../../graphql/mutations";
import { getPlayer } from "../../../../graphql/queries";

import { AuthContext } from "../../../../context/AuthContext";
import { isEmpty } from "lodash";

// import components
import Card from "../../../../components/common/Card";
import Input from "../../../../components/common/Input";
import LoaderButton from "../../../../components/common/LoaderButton";
import { Spinner } from "flowbite-react";

const client = generateClient();

export default function Profile({ params }) {
  const [user, setUser] = useContext(AuthContext);
  const [hasProfile, setHasProfile] = useState(false);
  const [profile, setProfile] = useState({});
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [level, setLevel] = useState(3);
  const [active, setActive] = useState(true);
  const [bio, setBio] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [mainLoader, setMainLoader] = useState(true);
  const [error, setError] = useState("");

  const getProfile = async () => {
    try {
      // Get a current user's profile
      // const user = await getCurrentUser();
      const onePlayerProfile = await client.graphql({
        query: getPlayer,
        variables: { userId: user?.userId },
      });
      console.log(onePlayerProfile?.data?.getPlayer);
      console.log("user ID: ", user?.userId);
      isEmpty(onePlayerProfile?.data?.getPlayer)
        ? setHasProfile(false)
        : setHasProfile(true);
      setProfile(onePlayerProfile?.data?.getPlayer);
      setMainLoader(false);
    } catch (e) {
      console.log(e);
      setMainLoader(false);
    }
  };

  const handleCreateProfile = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const newPlayerProfile = await client.graphql({
        query: createPlayer,
        variables: {
          input: {
            // userId: user?.userId,
            country: country,
            province: province,
            city: city,
            // "racquet": /* Provide a Racquet instance here */,
            // "strings": /* Provide a Strings instance here */,
            level: level,
            active: active,
            Bio: bio,
          },
        },
      });
      console.log(newPlayerProfile);
      if (newPlayerProfile?.errors[0]?.message?.length)
        setError(newPlayerProfile?.errors[0]?.message);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user?.userId?.length) getProfile();
  }, [user]);

  return (
    <>
      {mainLoader ? (
        <Spinner color={"warning"} size={"lg"} />
      ) : (
        <>
          {!hasProfile ? (
            <Card logo={false} title={"Create Your Profile"}>
              <Input
                type={"text"}
                id={"country"}
                value={country}
                label={"Country"}
                setHook={setCountry}
                // error={emailError}
                required={true}
              />

              <Input
                type={"text"}
                id={"province"}
                value={province}
                label={"Province"}
                setHook={setProvince}
                // error={emailError}
                required={true}
              />

              <Input
                type={"text"}
                id={"city"}
                value={city}
                label={"City"}
                setHook={setCity}
                // error={emailError}
                required={true}
              />
              <Input
                type={"number"}
                id={"level"}
                value={level}
                label={"Level"}
                setHook={setLevel}
                // error={emailError}
                required={true}
              />
              <Input
                type={"text-area"}
                id={"bio"}
                value={bio}
                label={"Bio"}
                setHook={setBio}
                // error={emailError}
                required={true}
              />
              {error?.length ? (
                <div className="">
                  <p className="text-red-500 text-xs">{error}</p>
                </div>
              ) : (
                ""
              )}
              <LoaderButton
                isLoading={isLoading}
                text={"Submit"}
                handle={handleCreateProfile}
              />
            </Card>
          ) : (
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between px-4 pt-4">
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-2 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">
                  # {profile?.level}
                </span>
                <button
                  id="dropdownButton"
                  data-dropdown-toggle="dropdown"
                  className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                  type="button"
                >
                  <span className="sr-only">Open dropdown</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 3"
                  >
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                  </svg>
                </button>
                <div
                  id="dropdown"
                  className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul className="py-2" aria-labelledby="dropdownButton">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Edit profile
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-center pb-10">
                <img
                  alt="user avatar"
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src={`https://robohash.org/${params.id}.png?size=200x200`}
                ></img>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {params.id.replace("%40", "@")}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {profile.Bio}
                </span>
                <div className="flex mt-4 md:mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none dark:bg-gray-100 dark:hover:bg-gray-200"
                  >
                    Add friend
                  </a>
                  <a
                    href="#"
                    className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Message
                  </a>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
