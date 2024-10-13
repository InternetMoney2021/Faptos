import Link from "next/link";
import React from "react";

const item = ["#Buy", "#Chart"];

const Navbar = () => {
  return (
    <div className="flex  justify-end gap-4">
      {item.map((k) => (
        <Link href={k} key={k}>
          <button
            key={k.slice(1)}
            className="p-3 border-black border rounded-xl font-extrabold text-xl cursor-pointer hover:bg-slate-900 shadow-lg transform transition-transform active:scale-95 active:bg-blue-600 active:shadow-sm"
          >
            {k.slice(1)}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;

<button className="bg-blue-500 text-white px-4 py-2 rounded shadow-lg transform transition-transform active:scale-95 active:bg-blue-600 active:shadow-sm">
  Click Me
</button>;
