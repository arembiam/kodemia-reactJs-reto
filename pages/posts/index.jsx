import NavBar from "@/src/components/NavBar";
import FooterPage from "@/src/components/Footer";
import Link from "next/link";
import { TbHeartPlus } from "react-icons/tb";
import { FaRegComment, FaRegBookmark } from "react-icons/fa";

export default function Posts() {
  return (
    <main className="bg-slate-100 min-h-screen flex-wrap p ">
      {/* BARRA DE NAVEGACIÓN */}
      <NavBar></NavBar>
      <div
        className="flex grid-col-3 gap-10 px-16 pt-4 pb-96 justify-center
      "
      >
        {/* ASIDE IZQUIERDO REACCIONES*/}
        <aside className=" flex flex-col gap-6">
          <div className=" flex flex-col justify-items-center">
            <span className="text-2xl text-gray-900">
              <TbHeartPlus />
            </span>
            <p className="text-sm text-gray-900">15</p>
          </div>
          <div>
            <span className="text-2xl text-gray-900">
              <FaRegComment />
            </span>
            <p className="text-sm text-gray-900">38</p>
          </div>
          <div>
            <span className="text-2xl text-gray-900">
              <FaRegBookmark />
            </span>
            <p className="text-sm text-gray-900">0</p>
          </div>
        </aside>

        {/* POST CARD ESTO ES UN COMPONENT */}
        <div className="flex flex-col justify-center">
          <div className="bg-white rounded-md border border-gray-300">
            {/* IMAGEN TOP DE POST */}
            <div>
              <img
                src="https://hubblesite.org/files/live/sites/hubble/files/home/mission-and-telescope/hubble-30th-anniversary/iconic-images/_images/hubble_30th_images/hubble-30th-cosmic-reef-2400x1200.jpg"
                alt=""
                class=" rounded-t-md object-contain "
              />
            </div>

            <div className="p-8">
              {/* AUTOR DEL POST */}
              <div className="flex flex-col-2 gap-3 items-center pb-2">
                <div>
                  <img
                    src="https://www.nasa.gov/wp-content/uploads/2023/03/pillars_of_creation.jpg"
                    alt=""
                    className="h-9 w-auto rounded-full"
                  />
                </div>

                <div>
                  <h4 className="text-gray-950 text-sm font-bold hover:text-blue-700">
                    Sonia Aguirre
                  </h4>
                  <p className="text-xs text-gray-600">Posted on 15 abr</p>
                </div>
              </div>

              {/* REACCIONES EMOJIS */}
              <div className="flex flex-row gap-6 pb-2 ">
                <div>
                  <span className="text-xl">💖</span>
                  <span className="text-md">12</span>
                </div>
                <div>
                  <span className="text-xl">🦄 </span>
                  <span className="text-md">2</span>
                </div>
                <div>
                  <span className="text-xl"> 🤯</span>
                  <span className="text-md"> 1</span>
                </div>
                <div>
                  <span className="text-xl">🙌 </span>
                  <span className="text-md">1</span>
                </div>
                <div>
                  <span className="text-xl">🔥</span>
                  <span className="text-md">3</span>
                </div>
              </div>

              {/* AQUÍ EMPIEZA EL POST */}
              <div className="py-4 ">
                <h1 className="text-5xl font-extrabold ">Meme Monday</h1>
                {/* TAGS */}
                <div className="flex flex-row gap-3 py-3">
                  <div
                    className="px-1 py-0 delay-75 border border-white rounded-md
                  hover:border hover:border-pink-500 hover:border-opacity-25 hover:bg-pink-200 hover:bg-opacity-25"
                  >
                    <span className="text-pink-500 text-xs">#</span>{" "}
                    <span className="text-gray-950 text-xs">jokes</span>
                  </div>

                  <div
                    className="px-1 py-0  delay-75  border border-white rounded-md
                   hover:border hover:border-lime-500 hover:border-opacity-25 hover:bg-lime-200 hover:bg-opacity-25"
                  >
                    <span className="text-lime-500 text-xs">#</span>{" "}
                    <span className="text-gray-950 text-xs">discuss</span>
                  </div>

                  <div
                    className="px-1 py-0 delay-75 border border-white rounded-md
                   hover:border-cyan-500 hover:border-opacity-25 hover:bg-cyan-200 hover:bg-opacity-25"
                  >
                    <span className="text-cyan-500 text-xs">#</span>{" "}
                    <span className="text-gray-950 text-xs">watercooler</span>
                  </div>
                </div>

                {/* CUERPO DE TEXTO */}
                <div>
                  <h3 className="text-lg font-bold">Meme Monday!</h3>
                  <p className="text-lg">
                    Today's cover image comes from last week's thread. DEV is an
                    inclusive space! Humor in poor taste will be downvoted by
                    mods.
                  </p>
                </div>
              </div>

              <div className="border-b border-gray-200"></div>

              {/* AQUÍ EMPIEZAN LOS COMMENTS */}
              <div className="flex flex-row py-3">
                <h1 className="text-2xl font-bold">Top comments</h1>
                <button className="border border-gray-300 rounded-md p-2 inline-flex hover:bg-gray-100">
                  <span>Subscribe</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ASIDE DERECHO SOBRE EL AUTOR ESTO ES UN COMPONENT */}
        <aside className="flex flex-col">
          <div className="bg-white rounded-md border border-gray-300 p-6">
            <h1>hola</h1>
          </div>
        </aside>
      </div>

      {/* FOOTER DE LA PAGINA  */}
      <FooterPage></FooterPage>
    </main>
  );
}
