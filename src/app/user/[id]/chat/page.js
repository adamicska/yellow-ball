"use client";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { generateClient } from "aws-amplify/api";
import { listMessages } from "@/graphql/queries";
import { createMessage } from "@/graphql/mutations";
import Message from "@/components/chat/Bubble";
import { onCreateMessage } from "@/graphql/subscriptions";
import Input from "@/components/common/Input";

const client = generateClient();

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState("");
  const [isOpen, setIsOpen] = useState("");

  // Change user for profile, to get id, username and more details
  const [user, setUser] = useContext(AuthContext);

  const getMessages = async () => {
    try {
      // Get a current user's profile
      const res = await client.graphql({
        query: listMessages,
        authMode: "userPool",
      });
      // console.log(res);
      setMessages(res?.data?.listMessages?.items);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    // Subscribe to creation of message
    const sub = client
      .graphql({ query: onCreateMessage, authMode: "userPool" })
      .subscribe({
        next: ({ data }) =>
          setMessages((prev) => [...prev, data.onCreateMessage]),
        error: (error) => console.warn(error),
      });
    // Subscribe to message update and delete

    return () => sub.unsubscribe();
  }, []);

  useEffect(() => {
    getMessages();
  }, [user]);

  const handleSubmit = async () => {
    const input = {
      // id is auto populated by AWS Amplify
      message: messageText,
      owner: user?.userId, // this is the user ID of the current user
    };

    // clear the textbox
    setMessageText("");

    // Try make the mutation to graphql client
    try {
      await client.graphql({
        query: createMessage,
        variables: {
          input: input,
        },
        authMode: "userPool",
      });
    } catch (err) {
      console.error(err);
    }
  };

  console.log("messages", messages);
  return (
    <div className="">
      <div className="">
        {/* <h1 className=""> AWS Amplify Live Chat</h1> */}
        <div className="mt-2 lg:px-20">
          {messages
            // sort messages oldest to newest client-side
            ?.sort((a, b) => b.createdAt.localeCompare(a.createdAt))
            ?.map((message) => (
              // map each message into the message component with message as props
              <Message
                message={message}
                user={user}
                isMe={user?.userId === message?.owner}
                key={message?.id}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
            ))}
        </div>

        <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white bottom-20 left-1/2 dark:bg-gray-700">
          <div className="flex justify-center">
            <Input
              type="text"
              id="message"
              name="message"
              autoFocus
              required
              value={messageText}
              setHook={setMessageText}
              placeholder="..."
            />
            <button
              onClick={handleSubmit}
              className="flex items-center justify-center p-2 mt-2 ml-2 border rounded-md text-white bg-black hover:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
