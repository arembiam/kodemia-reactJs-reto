import Link from "next/link";
import NavBar from "@/src/components/NavBar";
import FooterPage from "@/src/components/Footer";
import PostCard from "@/src/components/PostCard";
import {
  FaDev,
  FaTwitter,
  FaFacebookSquare,
  FaGithub,
  FaTwitch,
  FaMastodon,
} from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";

export default function Home() {
  return (
    <main className="bg-slate-100 min-h-screen flex-col flex-wrap justify-center">
      {/* BARRA DE NAVEGACIÓN */}
      <NavBar></NavBar>

      <div className="flex grid-cols-3  gap-x-4 py-4 px-16">
        {/* ASIDE IZQUIERDO */}

        <sidebar className="bg-transparent max-md:collapse">
          {/* ICONS 1 */}
          <ul className="py-2">
            <li className="p-1 gap-2 rounded-md hover:border hover:bg-indigo-700 hover:bg-opacity-10 hover:underline hover:text-blue-700">
              <span className="text-lg">🏠 </span>{" "}
              <span className="text-sm ">Home</span>
            </li>
            <li className="p-1 gap-2 rounded-md hover:border hover:bg-indigo-700 hover:bg-opacity-10 hover:underline hover:text-blue-700">
              <span className="text-lg"> 🗃️</span>{" "}
              <span className="text-sm">Reading List</span>
            </li>
            <li className="p-1 gap-2 rounded-md hover:border hover:bg-indigo-700 hover:bg-opacity-10 hover:underline hover:text-blue-700">
              <span className="text-lg"> 🎙️</span>{" "}
              <span className="text-sm">Podcasts</span>
            </li>
            <li className="p-1 gap-2 rounded-md hover:border hover:bg-indigo-700 hover:bg-opacity-10 hover:underline hover:text-blue-700">
              <span className="text-lg"> 📽️</span>{" "}
              <span className="text-sm">Videos</span>
            </li>
            <li className="p-1 gap-2 rounded-md hover:border hover:bg-indigo-700 hover:bg-opacity-10 hover:underline hover:text-blue-700">
              <span className="text-lg"> 🏷️</span>{" "}
              <span className="text-sm">Tags</span>
            </li>
            <li className="p-1 gap-2 rounded-md hover:border hover:bg-indigo-700 hover:bg-opacity-10 hover:underline hover:text-blue-700">
              <span className="text-lg">💡 </span>{" "}
              <span className="text-sm">DEV Help</span>
            </li>
            <li className="p-1 gap-2 rounded-md hover:border hover:bg-indigo-700 hover:bg-opacity-10 hover:underline hover:text-blue-700">
              <span className="text-lg">🛍️ </span>{" "}
              <span className="text-sm">Forem Shop</span>
            </li>
            <li className="p-1 gap-2 rounded-md hover:border hover:bg-indigo-700 hover:bg-opacity-10 hover:underline hover:text-blue-700">
              <span className="text-lg">❤️ </span>{" "}
              <span className="text-sm">Advertise on DEV</span>
            </li>
            <li className="p-1 gap-2 rounded-md hover:border hover:bg-indigo-700 hover:bg-opacity-10 hover:underline hover:text-blue-700">
              <span className="text-lg"> ✨ </span>{" "}
              <span className="text-sm">DEV Showcase </span>
            </li>
            <li className="p-1 gap-2 rounded-md hover:border hover:bg-indigo-700 hover:bg-opacity-10 items-center">
              <span className="text-xl inline-flex ">
                <FaDev />
              </span>{" "}
              <span className="text-sm inline-flex hover:underline hover:text-blue-700">
                About
              </span>
            </li>
            <li className="p-1 gap-2 rounded-md hover:border hover:bg-indigo-700 hover:bg-opacity-10 hover:underline hover:text-blue-700">
              <span className="text-lg">📯 </span>{" "}
              <span className="text-sm">Contact</span>
            </li>
            <li className="p-1 gap-2 rounded-md hover:border hover:bg-indigo-700 hover:bg-opacity-10 hover:underline hover:text-blue-700">
              📖 Guides<span className="text-lg"> </span>{" "}
              <span className="text-sm"></span>
            </li>
            <li className="p-1 gap-2 rounded-md hover:border hover:bg-indigo-700 hover:bg-opacity-10 hover:underline hover:text-blue-700">
              {" "}
              🤔Software comparisons<span className="text-lg"> </span>{" "}
              <span className="text-sm"></span>
            </li>
          </ul>
          {/* ICONS 2 - OTHER */}
          <div className="py-2">
            <p className="text-md font-bold">Other</p>
            <ul>
              <li className="p-1 gap-2 rounded-md hover:border hover:bg-indigo-700 hover:bg-opacity-10 hover:underline hover:text-blue-700">
                <span className="text-lg">👍</span>{" "}
                <span className="text-sm">Code of Conduct</span>
              </li>
              <li className="p-1 gap-2 rounded-md hover:border hover:bg-indigo-700 hover:bg-opacity-10 hover:underline hover:text-blue-700">
                <span className="text-lg">🤓</span>{" "}
                <span className="text-sm">Privacy Policy</span>{" "}
              </li>
              <li className="p-1 gap-2 rounded-md hover:border hover:bg-indigo-700 hover:bg-opacity-10 hover:underline hover:text-blue-700">
                <span className="text-lg">👀</span>{" "}
                <span className="text-sm">Terms of use</span>
              </li>
            </ul>
          </div>
          {/* SOCIAL MEDIA*/}
          <div className="inline-flex py-4 gap-2">
            <span className=" rounded-md p-1 text-xl text-gray-700 hover:bg-indigo-700 hover:bg-opacity-15 hover:text-blue-800">
              <FaTwitter />
            </span>
            <span className=" rounded-md p-1 text-xl text-gray-700 hover:bg-indigo-700 hover:bg-opacity-15 hover:text-blue-800">
              <FaFacebookSquare />
            </span>
            <span className=" rounded-md p-1 text-xl text-gray-700 hover:bg-indigo-700 hover:bg-opacity-15 hover:text-blue-800">
              <FaGithub />
            </span>
            <span className=" rounded-md p-1 text-xl text-gray-700 hover:bg-indigo-700 hover:bg-opacity-15 hover:text-blue-800">
              <BiLogoInstagramAlt />
            </span>
            <span className=" rounded-md p-1 text-xl text-gray-700 hover:bg-indigo-700 hover:bg-opacity-15 hover:text-blue-800">
              <FaTwitch />
            </span>
            <span className=" rounded-md p-1 text-xl text-gray-700 hover:bg-indigo-700 hover:bg-opacity-15 hover:text-blue-800">
              <FaMastodon />
            </span>
          </div>
          {/* MY TAGS */}
          <div className="py-2">
            <p className="text-md font-bold">My Tags</p>
            <ul>
              <li
                className=" border-0 border-gray-200 bg-none no-underline
               p-2 rounded-md text-sm text-gray-800 hover:border hover:bg-indigo-700 hover:bg-opacity-10 hover:underline hover:text-blue-700"
              >
                #webdev
              </li>
              <li
                className=" border-0 border-gray-200 bg-none no-underline
               p-2 rounded-md text-sm text-gray-800 hover:border hover:bg-indigo-700 hover:bg-opacity-10 hover:underline hover:text-blue-700"
              >
                #javascript
              </li>
              <li
                className=" border-0 border-gray-200 bg-none no-underline
               p-2 rounded-md text-sm text-gray-800 hover:border hover:bg-indigo-700 hover:bg-opacity-10 hover:underline hover:text-blue-700"
              >
                #beginners
              </li>
              <li
                className=" border-0 border-gray-200 bg-none no-underline
               p-2 rounded-md text-sm text-gray-800 hover:border hover:bg-indigo-700 hover:bg-opacity-10 hover:underline hover:text-blue-700"
              >
                #career
              </li>
              <li
                className=" border-0 border-gray-200 bg-none no-underline
               p-2 rounded-md text-sm text-gray-800 hover:border hover:bg-indigo-700 hover:bg-opacity-10 hover:underline hover:text-blue-700"
              >
                #git
              </li>
              <li
                className=" border-0 border-gray-200 bg-none no-underline
               p-2 rounded-md text-sm text-gray-800 hover:border hover:bg-indigo-700 hover:bg-opacity-10 hover:underline hover:text-blue-700"
              >
                #watercooler
              </li>
            </ul>
          </div>
        </sidebar>

        {/* POST FEED */}
        <div className="w-full justify-center">
          {/* NAVBAR */}
          <nav>
            <ul className="inline-flex gap-6">
              <li>
                {" "}
                <a
                  href="/"
                  className="disabled:text-gray-700 rounded-md py-2 px-3 hover:bg-white hover:text-blue-700  active:text-gray-950 font-bold "
                >
                  Relevant
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="/"
                  className="text-gray-700 rounded-md py-2 px-3 hover:bg-white hover:text-blue-700 visited:font-bold"
                >
                  Latest
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="/"
                  className="text-gray-700 rounded-md py-2 px-3 hover:bg-white hover:text-blue-700 visited:font-bold"
                >
                  Top{" "}
                </a>
              </li>
            </ul>
          </nav>
          {/* POST CARDS */}
          <PostCard />
        </div>

        {/* ASIDE DERECHO */}
        <div>
          <aside className=" grid gap-y-4">
            {/* Active */}
            <div className="rounded-md bg-white  border border-gray-200">
              <h3 className="text-lg font-bold p-3">Active discussions</h3>
              <div className="py-2 px-3 border-b border-t border-gray-200">
                <Link
                  href=""
                  className="text-sm text-gray-800 hover:text-blue-700"
                >
                  What Junior Devs Get Wrong
                </Link>
                <p className="text-xs text-gray-500">47 comments</p>
              </div>
              <div className="py-2 px-3 border-b border-gray-200">
                <Link
                  href=""
                  className="text-sm text-gray-800 hover:text-blue-700"
                >
                  What Are Your Best Clean Code Tips?
                </Link>
                <p className="text-xs text-gray-500">16 comments</p>
              </div>
              <div className="py-2 px-3 border-b border-gray-200">
                <Link
                  href=""
                  className="text-sm text-gray-800 hover:text-blue-700"
                >
                  Welcome Thread - v270
                </Link>
                <p className="text-xs text-gray-500">134 comments</p>
              </div>
              <div className="py-2 px-3 border-b border-gray-200">
                <Link
                  href=""
                  className="text-sm text-gray-800 hover:text-blue-700"
                >
                  8 BEST Sites to Practice Coding by Exercises 🏋️‍♂️🎯
                </Link>
                <p className="text-xs text-gray-500">7 comments</p>
              </div>
              <div className="py-2 px-3 border-b border-gray-200">
                <Link
                  href=""
                  className="text-sm text-gray-800 hover:text-blue-700"
                >
                  5 Developer Communities You Must Join in 2024
                </Link>
                <p className="text-xs text-gray-500">7 comments</p>
              </div>
            </div>

            {/* discuss */}
            <div className="rounded-md bg-white  border border-gray-200">
              <div className="p-3 border-b border-gray-200">
                <h3 className="text-lg font-bold text-gray-700">#discuss</h3>
                <p className="text-xs text-gray-600">
                  Discussion threads targeting the whole community
                </p>
              </div>
              <div className="p-3 border-b border-gray-200">
                <Link
                  href=""
                  className="text-sm text-gray-800 hover:text-blue-700"
                >
                  What are you learning about this weekend? 🧠
                </Link>
                <p className="text-xs text-gray-500">25 comments</p>
              </div>
              <div className="p-3 border-b border-gray-200">
                <Link
                  href=""
                  className="text-sm text-gray-800 hover:text-blue-700"
                >
                  What Are Your Best Clean Code Tips?
                </Link>
                <p className="text-xs text-gray-500">16 comments</p>
              </div>
              <div className="p-3 border-b border-gray-200">
                <Link
                  href=""
                  className="text-sm text-gray-800 hover:text-blue-700"
                >
                  Brewing Bytes:Exploring Programming and Low Code Development
                </Link>
                <p className="text-xs text-gray-500">11 comments</p>
              </div>
              <div className="p-3 border-b border-gray-200">
                <Link
                  href=""
                  className="text-sm text-gray-800 hover:text-blue-700"
                >
                  My New Podcast: AI With Alex
                </Link>
                <p className="text-xs text-gray-500">11 comments</p>
              </div>
              <div className="p-3 border-b border-gray-200">
                <Link
                  href=""
                  className="text-sm text-gray-800 hover:text-blue-700"
                >
                  How do you deal with digital eye strain and dry eyes?
                </Link>
                <p className="text-xs text-gray-500">11 comments</p>
              </div>
            </div>

            {/* watercooler */}
            <div className="rounded-md bg-white  border border-gray-200">
              <div className="p-3 border-b border-gray-200">
                <h3 className="text-lg font-bold text-gray-700">
                  #watercooler
                </h3>
                <p className="text-xs text-gray-600">
                  Light, and off-topic conversation.
                </p>
              </div>
              <div className="p-3 border-b border-gray-200">
                <Link
                  href=""
                  className="text-sm text-gray-800 hover:text-blue-700"
                >
                  Caption This! 🤔💭
                </Link>
                <p className="text-xs text-gray-500">11 comments</p>
              </div>
              <div className="p-3 border-b border-gray-200">
                <Link
                  href=""
                  className="text-sm text-gray-800 hover:text-blue-700"
                >
                  Quntis Dynamic RGB LED Monitor Lamp Tech Review
                </Link>
                <p className="text-xs text-gray-500">13 comments</p>
              </div>
              <div className="p-3 border-b border-gray-200">
                <Link
                  href=""
                  className="text-sm text-gray-800 hover:text-blue-700"
                >
                  Quntis Remote Control Dual Source Light Bar Tech Review
                </Link>
                <p className="text-xs text-gray-500">11 comments</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
      {/* FOOTER DE LA PAGINA  */}
      <FooterPage></FooterPage>
    </main>
  );
}
