import { FaRegBell } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
export default function Home() {
  return (
    <main className="bg-slate-100 min-h-screen flex-col flex-wrap">
      {/* BARRA DE NAVEGACIÓN */}
      <nav className="bg-white shadow-sm sticky w-full min-w-0 sm:min-w-full md:min-w-0 lg:min-w-full items-center gap-3 inline-flex px-10 py-2 ">
        <a href="/" className="items-center max-lg:w-30 max-md:w-full">
          <img
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png"
            alt=""
            className="h-9 w-auto"
          />
        </a>
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
            <a href="/newpost">Create post</a>
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

      <body className="flex grid-cols-3 py-4 px-16">
        {/* ASIDE IZQUIERDO */}

        <sidebar className="bg-transparent max-md:collapse">
          <ul>
            <li>🏠 Home</li>
            <li>🗃️ Reading List</li>
            <li>🎙️ Podcasts</li>
            <li>📽️ Videos</li>
            <li>🏷️ Tags</li>
            <li>💡DEV Help</li>
            <li>🛍️ Forem Shop</li>
            <li>♥️ Advertise on DEV</li>
            <li>✨ DEV Showcase</li>
            <li>About</li>
            <li>📯 Contact</li>
            <li>📖 Guides</li>
            <li> 🤔Software comparisons</li>
            <li></li>
            <li></li>
          </ul>

          <div>
            <p>Other</p>
            <ul>
              <li>👍Code of Conduct</li>
              <li>🤓 Privacy Policy</li>
              <li>👀 Terms of use</li>
            </ul>
          </div>
          {/* <div>AQUÍ VA SOCIALMEDIA</div> */}
          <div>
            <p>My Tags</p>
            <ul>
              <li>#webdev</li>
              <li>#javascript</li>
              <li>#beginners</li>
              <li>#career</li>
              <li>#git</li>
              <li>#watercooler</li>
            </ul>
          </div>
          <div></div>
          <footer className=" flex flex-wrap">
            <p className="text-sm text-wrap">
              DEV Community A constructive and inclusive social network for
              software developers. With you every step of your journey.
            </p>
            <p>
              Built on Forem — the open source software that powers DEV and
              other inclusive communities.
            </p>
            <p>
              Made with love and Ruby on Rails. DEV Community © 2016 - 2024.
            </p>
          </footer>
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
                <a href="">What Junior Devs Get Wrong</a>
                <p>47 comments</p>
              </div>
              <div>
                <a href="">What Are Your Best Clean Code Tips?</a>
                <p>16 comments</p>
              </div>
              <div>
                <a href="">Welcome Thread - v270</a>
                <p>134 comments</p>
              </div>
              <div>
                <a href="">8 BEST Sites to Practice Coding by Exercises 🏋️‍♂️🎯</a>
                <p>7 comments</p>
              </div>
              <div>
                <a href="">5 Developer Communities You Must Join in 2024</a>
                <p>7 comments</p>
              </div>
            </div>
            <div>
              <div>
                <h3>#discuss</h3>
                <p>Discussion threads targeting the whole community</p>
              </div>
              <div>
                <a href="">What are you learning about this weekend? 🧠</a>
                <p>25 comments</p>
              </div>
              <div>
                <a href="">What Are Your Best Clean Code Tips?</a>
                <p>16 comments</p>
              </div>
              <div>
                <a href="">
                  Brewing Bytes:Exploring Programming and Low Code Development
                </a>
                <p>New</p>
              </div>
              <div>
                <a href="">My New Podcast: AI With Alex</a>
                <p>New</p>
              </div>
              <div>
                <a href="">
                  How do you deal with digital eye strain and dry eyes?
                </a>
                <p>11 comments</p>
              </div>
            </div>
            <div>
              <div>
                <h3>#watercooler</h3>
                <p>Light, and off-topic conversation.</p>
              </div>
              <div>
                <a href="">Caption This! 🤔💭</a>
                <p>11 comments</p>
              </div>
              <div>
                <a href="">Quntis Dynamic RGB LED Monitor Lamp Tech Review</a>
                <p>New</p>
              </div>
              <div>
                <a href="">
                  Quntis Remote Control Dual Source Light Bar Tech Review
                </a>
                <p>New</p>
              </div>
            </div>
          </aside>
        </div>
      </body>
    </main>
  );
}
