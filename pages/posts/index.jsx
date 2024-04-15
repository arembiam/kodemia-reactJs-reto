import NavBar from "@/src/components/NavBar";
import FooterPage from "@/src/components/Footer";
import Link from "next/link";
import { TbHeartPlus } from "react-icons/tb";
import { FaRegComment, FaRegBookmark } from "react-icons/fa";

export default function Posts() {
  return (
    <main className="bg-slate-100 min-h-screen flex-col flex-wrap">
      {/* BARRA DE NAVEGACIÓN */}
      <NavBar></NavBar>
      <div className="flex px-16 p-4">
        {/* ASIDE IZQUIERDO REACCIONES*/}
        <div className="flex py-4 px-16">
          <aside className=" flex flex-col  gap-6">
            <div>
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
        </div>
        {/* POST CARD ESTO ES UN COMPONENT */}
        {/* ASIDE DERECHO SOBRE EL AUTOR ESTO ES UN COMPONENT */}
      </div>

      {/* FOOTER DE LA PAGINA  */}
      <FooterPage></FooterPage>
    </main>
  );
}
