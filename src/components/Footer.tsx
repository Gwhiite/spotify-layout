import React from "react";
import {
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Maximize2,
  Play,
} from "lucide-react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="fixed w-full bottom-0 bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          src="/homura.jpg"
          className="w-full rounded-lg"
          width={56}
          height={56}
          alt="Capa da música Homura"
        />
        <div className="flex flex-col">
          <strong className="font-normal ">Homura</strong>
          <span className="text-xs text-zinc-400">Lisa</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <Shuffle size={20} className="text-zinc-200" />
          <SkipBack size={20} className="text-zinc-200 fill-white" />
          <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full shadow-lg bg-white text-black">
            <Play className="fill-black" />
          </button>
          <SkipForward size={20} className="text-zinc-200 fill-white" />
          <Repeat size={20} className="text-zinc-200" />
        </div>
        <div className="flex items-center gap-2 ">
          <span className="text-xs text-zinc-500">0:31</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600 ">
            <div className="bg-zinc-200 w-16 h-1 rounded-full"></div>
          </div>
          <span className="text-xs text-zinc-500">2:26</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <div className="flex items-center gap-2">
          <Volume size={20} />
          <div className="h-1 rounded-full w-24 bg-zinc-600 ">
            <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
          </div>
        </div>
        <Maximize2 size={20} />
      </div>
    </footer>
  );
}

export default Footer;
