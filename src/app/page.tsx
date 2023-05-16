import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className=" rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className=" rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="capitalize text-3xl font-semibold mt-10">
            good afternoon
          </h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 group capitalize rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <Image
                src="/homura.jpg"
                width={104}
                height={104}
                alt="Capa da música Homura"
              />
              <strong>Homura</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full shadow-lg bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play className="fill-black" />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group capitalize rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <Image
                src="/homura.jpg"
                width={104}
                height={104}
                alt="Capa da música Homura"
              />
              <strong>Homura</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full shadow-lg bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play className="fill-black" />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group capitalize rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <Image
                src="/homura.jpg"
                width={104}
                height={104}
                alt="Capa da música Homura"
              />
              <strong>Homura</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full shadow-lg bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play className="fill-black" />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group capitalize rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <Image
                src="/homura.jpg"
                width={104}
                height={104}
                alt="Capa da música Homura"
              />
              <strong>Homura</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full shadow-lg bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play className="fill-black" />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group capitalize rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <Image
                src="/homura.jpg"
                width={104}
                height={104}
                alt="Capa da música Homura"
              />
              <strong>Homura</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full shadow-lg bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play className="fill-black" />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group capitalize rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <Image
                src="/homura.jpg"
                width={104}
                height={104}
                alt="Capa da música Homura"
              />
              <strong>Homura</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full shadow-lg bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play className="fill-black" />
              </button>
            </a>
          </div>
          <h2 className="capitalize text-2xl font-semibold mt-10">
            made for guilherme branco
          </h2>
          <div className="grid grid-cols-5 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2 "
            >
              <Image
                src="/homura.jpg"
                className="w-full"
                width={104}
                height={104}
                alt="Capa da música Homura"
              />
              <strong className="font-semibold ">Daily mix 1</strong>
              <span className="text-sm text-zinc-400">
                Miura Jam, Akano, Lisa and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2 "
            >
              <Image
                src="/homura.jpg"
                className="w-full"
                width={104}
                height={104}
                alt="Capa da música Homura"
              />
              <strong className="font-semibold ">Daily mix 1</strong>
              <span className="text-sm text-zinc-400">
                Miura Jam, Akano, Lisa and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2 "
            >
              <Image
                src="/homura.jpg"
                className="w-full"
                width={104}
                height={104}
                alt="Capa da música Homura"
              />
              <strong className="font-semibold ">Daily mix 1</strong>
              <span className="text-sm text-zinc-400">
                Miura Jam, Akano, Lisa and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2 "
            >
              <Image
                src="/homura.jpg"
                className="w-full"
                width={104}
                height={104}
                alt="Capa da música Homura"
              />
              <strong className="font-semibold ">Daily mix 1</strong>
              <span className="text-sm text-zinc-400">
                Miura Jam, Akano, Lisa and more
              </span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2 "
            >
              <Image
                src="/homura.jpg"
                className="w-full"
                width={104}
                height={104}
                alt="Capa da música Homura"
              />
              <strong className="font-semibold ">Daily mix 1</strong>
              <span className="text-sm text-zinc-400">
                Miura Jam, Akano, Lisa and more
              </span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
