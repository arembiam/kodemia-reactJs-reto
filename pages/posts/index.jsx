import NavBar from "@/src/components/NavBar";
import FooterPage from "@/src/components/Footer";
import PostDetail from "@/src/components/PostDetail";

import { TbHeartPlus } from "react-icons/tb";
import { FaRegComment, FaRegBookmark } from "react-icons/fa";

export default function Posts() {
  return (
    <main className="bg-slate-100 min-h-screen  justify-center items-center">
      {/* BARRA DE NAVEGACIÓN */}
      <NavBar></NavBar>
      <div className="flex flex-col-3 gap-6 px-28 pt-5 pb-96 justify-center">
        {/* ASIDE IZQUIERDO REACCIONES*/}
        <aside className=" flex flex-col gap-6 w-20 max-lg:visible  max-md:collapse ">
          <div className=" flex flex-col justify-items-center">
            <span className="text-2xl text-gray-900 hover:text-rose-500">
              <TbHeartPlus />
            </span>
            <p className="text-sm text-gray-900">15</p>
          </div>
          <div>
            <span className="text-2xl text-gray-900 hover:text-amber-500">
              <FaRegComment />
            </span>
            <p className="text-sm text-gray-900">38</p>
          </div>
          <div>
            <span className="text-2xl text-gray-900 hover:text-blue-700">
              <FaRegBookmark />
            </span>
            <p className="text-sm text-gray-900">0</p>
          </div>
        </aside>

        {/* POST CARD ESTO ES UN COMPONENT */}
        <PostDetail />

        {/* ASIDE DERECHO SOBRE EL AUTOR ESTO ES UN COMPONENT */}
        <aside className="flex flex-col w-96 justify-between max-lg:visible  max-md:collapse">
          <div className="bg-white rounded-md border border-gray-300 flex flex-col pb-4 ">
            {/* AUTOR DEL POST */}
            <div className="pb-8">
              <div className=" bg-teal-500 w-full rounded-t-md h-5">
                <div className="flex-row inline-flex gap-2 items-center py-2">
                  <div className="inline-flex px-4">
                    <img
                      src="https://www.nasa.gov/wp-content/uploads/2023/03/pillars_of_creation.jpg"
                      alt=""
                      className="h-10 w-auto rounded-full"
                    />
                  </div>
                  <div className="inline-flex">
                    <h4 className="text-gray-950 text-sm font-bold hover:text-blue-700">
                      Sonia Aguirre
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* FOLLOW BUTTON */}
            <div className="px-4 py-2">
              <button
                type="button"
                className="bg-blue-700 text-white text-sm font-medium p-1 w-full rounded-md hover:bg-blue-800"
              >
                Follow
              </button>
            </div>

            {/*BIO */}
            <div className="px-4">
              <div className="py-2">
                <p className="text-sm text-gray-900">
                  Graphic Designer & Aspiring Full-Stack Developer. I do stuff
                  sometimes.
                </p>
              </div>
              <div className="py-1">
                <p className="text-xs text-gray-600 font-bold">LOCATION</p>
                <p className="text-sm text-gray-900">Monterrey,MX</p>
              </div>
              <div className="py-1">
                <p className="text-xs text-gray-600 font-bold">WORK</p>
                <p className="text-sm text-gray-900">Full-stack dev</p>
              </div>
              <div className="py-1">
                <p className="text-xs text-gray-600 font-bold">JOINED</p>
                <p className="text-sm text-gray-900">May 8, 2023</p>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* FOOTER DE LA PAGINA  */}
      <FooterPage></FooterPage>
    </main>
  );
}
