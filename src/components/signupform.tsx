import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SubscribeForm = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (
    event: any,
  ): Promise<void> => {
    event.preventDefault();

    const BASEURI = process.env.REACT_APP_API_URL;

    try {
      const response = await fetch(`${BASEURI}/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast("🦄 Subscribed!", {
          position: "bottom-right",
          theme: "dark",
        });
      } else {
        toast.error("Subscription failed. Please try again.", {
          position: "bottom-right",
          theme: "dark",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.", {
        position: "bottom-right",
        theme: "dark",
      });
    }
  };

  return (
    <div
      id="subscribe"
      className="flex flex-col items-center w-full space-y-10 my-20"
    >
      <div className="flex flex-col space-y-1 items-center">
        <h2 className="outlined-text text-3xl lg:text-4xl xl:text-5xl font-bold lg:tracking-tight xl:tracking-tighter">
          Become a Subscriber
        </h2>
        <p className=" text-gray-500 text-lg lg:text-xl xl:text-2xl lg:tracking-tight xl:tracking-tighter">
          Get exclusive discounts and notifications of events!
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-2"
      >
        <div className="flex space-x-6">
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
            value={email}
            onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
            required
          />
          <button
            className="bg-yellow-300 border-2 border-yellow-300 p-2 rounded hover:border-2 hover:border-black hover:bg-yellow-400"
            type="submit"
          >
            Subscribe
          </button>
        </div>
        <p className="text-gray-500">
          I care about your data. Read my{" "}
          <a
            href="/privacy"
            target="_blank"
            rel="noopener"
            className="text-sky-700"
          >
            privacy policy.
          </a>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SubscribeForm;
