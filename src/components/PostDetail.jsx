export default function PostDetail(props) {
  return (
    <div className="flex-col flex-wrap w-full bg-white rounded-md border border-gray-300 ">
      {/* IMAGEN TOP DE POST */}
      <div>
        <img
          src="https://hubblesite.org/files/live/sites/hubble/files/home/mission-and-telescope/hubble-30th-anniversary/iconic-images/_images/hubble_30th_images/hubble-30th-cosmic-reef-2400x1200.jpg"
          alt=""
          class=" rounded-t-md object-contain "
        />
      </div>

      {/* AUTOR DEL POST */}
      <div className="w-full inline-flex flex-col-2 gap-3 items-center px-6 py-3 ">
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
      <div className=" flex-wrap inline-flex gap-6 px-6 py-3 ">
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
      <div className="w-full flex-col px-6 py-3 ">
        <h1 className="text-5xl font-extrabold ">Meme Monday</h1>
        {/* TAGS */}
        <div className="flex-wrap inline-flex gap-3 py-2">
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
        <div className="py-2 flex-wrap">
          <h3 className="text-lg font-bold">Meme Monday!</h3>
          <p className="text-lg">
            Today's cover image comes from last week's thread. DEV is an
            inclusive space! Humor in poor taste will be downvoted by mods.
          </p>
        </div>
      </div>

      {/* DIVISIÓN MINÚSCULA  */}
      <div className="w-full flex-wrap border-b border-gray-200"></div>

      {/* AQUÍ EMPIEZAN LOS COMMENTS */}
      <div className="w-full flex flex-col px-8 py-3 ">
        {/* HEADER COMMENTS */}
        <div className="inline-flex py-4 justify-center">
          <div className="inline-flex justify-end items-center">
            <h1 className="text-2xl font-bold">Top comments</h1>
          </div>
          <div className="flex-1 md:flex-0"></div>
          <div className="inline-flex justify-end items-center">
            <button className="border border-gray-300 rounded-md py-1 px-2 inline-flex hover:bg-gray-100">
              <span className="text-sm font-semibold text-gray-600">
                Subscribe
              </span>
            </button>
          </div>
        </div>

        {/* USER COMMENT */}
        <div className="inline-flex py-4 gap-8 items-center">
          {/* AUTOR DEL POST */}
          <img
            src="https://www.nasa.gov/wp-content/uploads/2023/03/pillars_of_creation.jpg"
            alt=""
            className="h-9 w-auto rounded-full"
          />

          {/* INPUT TEXTO */}
          <div className="inline-flex w-full h-16 ">
            <input
              type="textarea"
              className="border border-gray-400 rounded-md w-full placeholder:text-sm  focus:outline-non px-4"
              placeholder="Add to the discussion"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
