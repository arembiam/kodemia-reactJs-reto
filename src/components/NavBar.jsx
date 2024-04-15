import Link from "next/link";
import { FaRegBell } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";

export default function NavBar(props) {
  return (
    <nav className="bg-white shadow-sm sticky w-full min-w-0 sm:min-w-full md:min-w-0 lg:min-w-full items-center gap-3 inline-flex px-10 py-2 ">
      <Link href="/" className="items-center max-lg:w-30 max-md:w-full">
        <img
          src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png"
          alt=""
          className="h-9 w-auto"
        />
      </Link>
      {/* BARRA DE BÚSQUEDA */}
      <div className="inline-flex w-96 gap-3 rounded-md ">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search..."
          className=" text-sm w-full placeholder-gray-700 border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-800 focus:ring-1 focus:ring-blue-700 max-md:collapse"
        />
        <span className="inline-flex p-2 items-center justify-end">
          <LuSearch />
        </span>
      </div>
      {/* ESPACIO MUERTO */}
      <div className="flex-1 w-96"></div>
      {/* GRUPO BOTONES */}
      <div className="inline-flex w-96 gap-3 justify-end items-center ">
        <button
          type="button"
          className="border border-blue-700 p-2 rounded-lg text-sm font-medium text-blue-700 max-lg:visible max-md:invisible hover:text-white hover:bg-blue-700 hover:underline"
        >
          <Link href="/newpost">Create post</Link>
        </button>
        <button
          type="button"
          className="text-lg text-gray-500  hover:bg-indigo-100 bg-opacity-25 hover:text-blue-700 p-2 rounded-md"
        >
          <FaRegBell />
        </button>
        <img
          src="https://www.nasa.gov/wp-content/uploads/2023/03/pillars_of_creation.jpg"
          alt=""
          className="h-9 w-auto rounded-full border-2 border-gray-500  hover:border-indigo-500 "
        />
      </div>
    </nav>
  );
}
