export default function PostDetail() {
  return (
    <main className="">
      {/* BARRA DE NAVEGACIÓN */}
      <div className="sticky">
        <nav className="bg-white shadow-sm">
          <input type="text" name="" id="" placeholder="Search..." />
          <button type="button">Create post</button>
        </nav>
      </div>
      <body className="flex px-16 bg-slate-50">
        {/* ASIDE IZQUIERDO REACCIONES*/}
        <div>
          <aside>
            <div>x</div>
            <div>x</div>
            <div>x</div>
          </aside>
        </div>
        {/* POST CARD ESTO ES UN COMPONENT */}
        {/* ASIDE DERECHO SOBRE EL AUTOR ESTO ES UN COMPONENT */}
      </body>

      {/* FOOTER DE LA PAGINA  */}
      <footer className="bg-gray-200">
        <div className="grid grid-rows-4 justify-center items-center">
          <p className="text-center">
            DEV Community — A constructive and inclusive social network for
            software developers. With you every step of your journey.
          </p>
          <ul className="flex justify-center">
            <li>Home</li>
            <li>Podcasts</li>
            <li>Videos</li>
            <li>Tags</li>
            <li>DEV Help</li>
            <li>Forem Shop</li>
            <li>Advertise on Dev</li>
            <li>DEV Showcase</li>
            <li>About</li>
            <li>Contact</li>
            <li>Guides</li>
            <li>Software comparisons</li>
          </ul>
          <ul className="flex justify-center">
            <li>Code of Conduct</li>
            <li>Privacy Policy</li>
            <li>Terms of use</li>
          </ul>
          <p className="text-center">
            Built on Forem — the open source software that powers DEV and other
            inclusive communities.
          </p>
          <p className="text-center">
            Made with love and Ruby on Rails. DEV Community © 2016 - 2024.
          </p>
        </div>
      </footer>
    </main>
  );
}
