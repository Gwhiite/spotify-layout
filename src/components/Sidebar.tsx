import React from "react";
import { Home as HomeIcon, Search, Library } from "lucide-react";

function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <nav className="space-y-5 mt-10">
        <a
          href=""
          className="flex items-center gap-3 text-xs font-semibold cursor-pointer  text-zinc-200 "
        >
          <HomeIcon />
          Home
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-xs font-semibold cursor-pointer  text-zinc-200 "
        >
          <Search />
          Search
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-xs font-semibold cursor-pointer  text-zinc-200 "
        >
          <Library />
          Your Library
        </a>
      </nav>
      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3 ">
        <a
          href=""
          className="text-sm text-zinc-400 hover:text-zinc-100 capitalize"
        >
          Snowfall 10 hours
        </a>
        <a
          href=""
          className="text-sm text-zinc-400 hover:text-zinc-100 capitalize"
        >
          As melhores da Adele
        </a>
        <a
          href=""
          className="text-sm text-zinc-400 hover:text-zinc-100 capitalize"
        >
          sleeping at last (all songs)
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;
