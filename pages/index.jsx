import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-slate-100 min-h-screen flex-col flex-wrap">
      {/* BARRA DE NAVEGACIÓN */}

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
      </body>
    </main>
  );
}
