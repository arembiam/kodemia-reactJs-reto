export default function Home() {
  return (
    <main className="bg-slate-50">
      <nav className="sticky bg-white shadow-sm">
        <input type="text" name="" id="" placeholder="Search..." />
        <button type="button">Create post</button>
      </nav>
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
        </aside>
      </div>
    </main>
  );
}
