import Link from "next/link";

export default function Footer(props) {
  return (
    <footer className="bg-gray-200 p-3 fixed bottom-0 w-full">
      <p className="text-center text-sm">
        <a
          href="/"
          className="text-blue-700 font-medium
            "
        >
          DEV Community
        </a>{" "}
        — A constructive and inclusive social network for software developers.
        With you every step of your journey.
      </p>
      <ul className="flex flex-wrap justify-center items-center text-sm text-blue-700 gap-2">
        <li>Home</li>
        <li className="text-lg text-gray-900">•</li>
        <li>Podcasts</li>
        <li className="text-lg text-gray-900">•</li>
        <li>Videos</li>
        <li className="text-lg text-gray-900">•</li>
        <li>Tags</li>
        <li className="text-lg text-gray-900">•</li>
        <li>DEV Help</li>
        <li className="text-lg text-gray-900">•</li>
        <li>Forem Shop</li>
        <li className="text-lg text-gray-900">•</li>
        <li>Advertise on Dev</li>
        <li className="text-lg text-gray-900">•</li>
        <li>DEV Showcase</li>
        <li className="text-lg text-gray-900">•</li>
        <li>About</li>
        <li className="text-lg text-gray-900">•</li>
        <li>Contact</li>
        <li className="text-lg text-gray-900">•</li>
        <li>Guides</li>
        <li className="text-lg text-gray-900">•</li>
        <li>Software comparisons</li>
      </ul>
      <ul className="flex flex-wrap justify-center items-center text-sm text-blue-700 gap-2">
        <li>Code of Conduct</li>
        <li className="text-lg text-gray-900">•</li>
        <li>Privacy Policy</li>
        <li className="text-lg text-gray-900">•</li>
        <li>Terms of use</li>
      </ul>
      <p className="text-center text-sm">
        <Link href="" className="text-blue-700">
          Built on Forem
        </Link>{" "}
        — the{" "}
        <Link href="" className="text-blue-700">
          open source
        </Link>{" "}
        software that powers{" "}
        <Link href="/" className="text-blue-700">
          DEV
        </Link>{" "}
        and other inclusive communities.
      </p>
      <p className="text-center text-sm">
        Made with love and{" "}
        <Link href="" className="text-blue-700">
          Ruby on Rails.
        </Link>{" "}
        DEV Community © 2016 - 2024.
      </p>
    </footer>
  );
}
