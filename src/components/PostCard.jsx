export default function PostCard(props) {
  return (
    <div className="rounded-md bg-white  border border-gray-200">
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

      {/* DETALLES DEL POST */}
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
      </div>
    </div>
  );
}
