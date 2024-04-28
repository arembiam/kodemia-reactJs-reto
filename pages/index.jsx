import Link from "next/link";
import NavBar from "@/src/components/NavBar";
import FooterPage from "@/src/components/Footer";
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

      <div className="flex grid-cols-3 py-4 px-16">
        {/* ASIDE IZQUIERDO */}

        <sidebar className="bg-transparent max-md:collapse">
          {/* ICONS 1 */}
          <ul className="py-2">
            <li className="py-1 gap-2">
              <span className="text-lg">🏠 </span>{" "}
              <span className="text-sm">Home</span>
            </li>
            <li className="py-1 gap-2">
              <span className="text-lg"> 🗃️</span>{" "}
              <span className="text-sm">Reading List</span>
            </li>
            <li className="py-1 gap-2">
              <span className="text-lg"> 🎙️</span>{" "}
              <span className="text-sm">Podcasts</span>
            </li>
            <li className="py-1 gap-2">
              <span className="text-lg"> 📽️</span>{" "}
              <span className="text-sm">Videos</span>
            </li>
            <li className="py-1 gap-2">
              <span className="text-lg"> 🏷️</span>{" "}
              <span className="text-sm">Tags</span>
            </li>
            <li className="py-1 gap-2">
              <span className="text-lg">💡 </span>{" "}
              <span className="text-sm">DEV Help</span>
            </li>
            <li className="py-1 gap-2">
              <span className="text-lg">🛍️ </span>{" "}
              <span className="text-sm">Forem Shop</span>
            </li>
            <li className="py-1 gap-2">
              <span className="text-lg">❤️ </span>{" "}
              <span className="text-sm">Advertise on DEV</span>
            </li>
            <li className="py-1 gap-2">
              <span className="text-lg"> ✨ </span>{" "}
              <span className="text-sm">DEV Showcase </span>
            </li>
            <li className="py-1 gap-2">
              <span className="text-xl inline-flex ">
                <FaDev />
              </span>{" "}
              <span className="text-sm inline-flex">About</span>
            </li>
            <li className="py-1 gap-2">
              <span className="text-lg">📯 </span>{" "}
              <span className="text-sm">Contact</span>
            </li>
            <li className="py-1 gap-2">
              📖 Guides<span className="text-lg"> </span>{" "}
              <span className="text-sm"></span>
            </li>
            <li className="py-1 gap-2">
              {" "}
              🤔Software comparisons<span className="text-lg"> </span>{" "}
              <span className="text-sm"></span>
            </li>
          </ul>
          {/* ICONS 2 - OTHER */}
          <div className="py-2">
            <p className="text-md font-bold">Other</p>
            <ul>
              <li className="py-1 gap-2">
                <span className="text-lg">👍</span>{" "}
                <span className="text-sm">Code of Conduct</span>
              </li>
              <li className="py-1 gap-2">
                <span className="text-lg">🤓</span>{" "}
                <span className="text-sm">Privacy Policy</span>{" "}
              </li>
              <li className="py-1 gap-2">
                <span className="text-lg">👀</span>{" "}
                <span className="text-sm">Terms of use</span>
              </li>
            </ul>
          </div>
          {/* SOCIAL MEDIA*/}
          <div className="inline-flex py-4 gap-3">
            <span className="text-2xl text-gray-700">
              <FaTwitter />
            </span>
            <span className="text-2xl text-gray-700">
              <FaFacebookSquare />
            </span>
            <span className="text-2xl text-gray-700">
              <FaGithub />
            </span>
            <span className="text-2xl text-gray-700">
              <BiLogoInstagramAlt />
            </span>
            <span className="text-2xl text-gray-700">
              <FaTwitch />
            </span>
            <span className="text-2xl text-gray-700">
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
        <div>
          <nav>
            <ul>
              <li>Relevant</li>
              <li>Latest</li>
              <li>Top</li>
            </ul>
          </nav>
        </div>
        {/* ASIDE DERECHO */}
        <div>
          <aside>
            <div>
              <h3>Active discussions</h3>
              <div>
                <Link href="">What Junior Devs Get Wrong</Link>
                <p>47 comments</p>
              </div>
              <div>
                <Link href="">What Are Your Best Clean Code Tips?</Link>
                <p>16 comments</p>
              </div>
              <div>
                <Link href="">Welcome Thread - v270</Link>
                <p>134 comments</p>
              </div>
              <div>
                <Link href="">
                  8 BEST Sites to Practice Coding by Exercises 🏋️‍♂️🎯
                </Link>
                <p>7 comments</p>
              </div>
              <div>
                <Link href="">
                  5 Developer Communities You Must Join in 2024
                </Link>
                <p>7 comments</p>
              </div>
            </div>
            <div>
              <div>
                <h3>#discuss</h3>
                <p>Discussion threads targeting the whole community</p>
              </div>
              <div>
                <Link href="">
                  What are you learning about this weekend? 🧠
                </Link>
                <p>25 comments</p>
              </div>
              <div>
                <Link href="">What Are Your Best Clean Code Tips?</Link>
                <p>16 comments</p>
              </div>
              <div>
                <Link href="">
                  Brewing Bytes:Exploring Programming and Low Code Development
                </Link>
                <p>New</p>
              </div>
              <div>
                <Link href="">My New Podcast: AI With Alex</Link>
                <p>New</p>
              </div>
              <div>
                <Link href="">
                  How do you deal with digital eye strain and dry eyes?
                </Link>
                <p>11 comments</p>
              </div>
            </div>
            <div>
              <div>
                <h3>#watercooler</h3>
                <p>Light, and off-topic conversation.</p>
              </div>
              <div>
                <Link href="">Caption This! 🤔💭</Link>
                <p>11 comments</p>
              </div>
              <div>
                <Link href="">
                  Quntis Dynamic RGB LED Monitor Lamp Tech Review
                </Link>
                <p>New</p>
              </div>
              <div>
                <Link href="">
                  Quntis Remote Control Dual Source Light Bar Tech Review
                </Link>
                <p>New</p>
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
