import { useState } from "preact/hooks";

export default function Greeting({
  messages,
  children,
}: {
  messages: string[];
  children: any;
}) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div
      class="tooltip tooltip-right"
      data-tip={`${greeting}! Thank you for visiting!`}
      onMouseEnter={() => setGreeting(randomMessage())}
    >
      {children}
    </div>
  );
}
