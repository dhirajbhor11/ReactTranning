"use client";

import React from "react";

export default function Test() {
  const [count, setCount] = React.useState(0);
  const [todo, setTodo] = React.useState("");

  React.useEffect(() => {
    console.log("Component mounted ");
    
    return () => {
      console.log("Component unmounted or count changed");
    };
  },[]);

  React.useEffect(() => {
    console.log("count value changed", count);
  }, [count]);

  
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => setCount(count + 1)}
      >
        Count: {count}
      </button>
      <div className="flex flex-col items-center gap-4">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter a todo"
          className="border border-gray-300 rounded px-4 py-2 w-64"
        />
        <p className="text-lg">Todo: {todo}</p>
      </div>
      <div className="text-sm text-gray-500">Made with ❤️ using Next.js</div>
    </div>
  );
}
