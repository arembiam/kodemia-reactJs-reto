export default function Home() {
  return (
    <main className="bg-slate-50">
      {/* BARRA DE NAVEGACIÓN */}
      <div className="sticky">
        <nav className="bg-white shadow-sm">
          <input type="text" name="" id="" placeholder="Search..." />
          <button type="button">Create post</button>
        </nav>
      </div>

      <body className="flex px-16">
        {/* ASIDE IZQUIERDO */}
        <div>
          <aside className="bg-transparent">
            <div>
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
            </div>
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
            <footer>
              <p>
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
          </aside>
        </div>
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
