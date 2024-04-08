import { useForm } from "react-hook-form";
import { FaXmark } from "react-icons/fa6";
import { PiNutBold } from "react-icons/pi";

export default function NewPost() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <main className="bg-slate-100 min-h-screen pt-3 px-60  flex-col flex-wrap items-center">
      {/* TOP PAGINA OPCIONES */}
      <div className="inline-flex flex-wrap  w-full py-2 ">
        <div className="flex-1 items-center gap-3 inline-flex">
          <img
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png"
            alt=""
            className="h-8 w-auto"
          />
          <span className="font-semibold">Create Post</span>
        </div>

        <div className="items-center inline-flex">
          <button
            type="button"
            className="p-2 rounded-md text-black font-semibold hover:bg-blue-100 bg-opacity-25"
          >
            Edit
          </button>
          <button
            type="button"
            className="p-2 rounded-md text-black  hover:bg-blue-100 bg-opacity-25 "
          >
            Preview
          </button>
          <button
            type="button"
            className="p-2 rounded-md text-black font-semibold hover:bg-blue-100 bg-opacity-25 "
          >
            <FaXmark />
          </button>
        </div>
      </div>
      {/* FORMULARIO PT1  */}
      <div className="flex flex-col flex-wrap justify-center bg-white rounded-md border border-gray-300 ">
        <div className="py-10 px-6">
          <button
            type="button"
            className="flex border border-gray-300 p-2 rounded-md w-fit text-sm font-medium"
          >
            Add a cover image
          </button>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="New post title here..."
              required
              className="font-extrabold text-3xl py-3 placeholder-gray-600 bg-transparent w-full focus:outline-none "
              {...register("title")}
            />
            <input
              type="text"
              placeholder="Add up to 4 tags..."
              className="flex text-sm placeholder-gray-500 py-3 bg-transparent w-full focus:outline-none "
              required
              {...register("tags")}
            />
          </form>
        </div>

        {/* BARRA DE FORMATO TEXTO */}
        <div className="inline-flex bg-slate-100 w-ful gap-2 px-6">
          <button type="button">x</button>
        </div>

        {/* FORMULARIO PT2 */}
        <div className="py-10 px-6">
          <form action="">
            <textarea
              placeholder="Write your post content here..."
              required
              className="w-full font-mono placeholder-gray-500 focus:outline-none"
              {...register("content")}
            />
          </form>
        </div>
      </div>

      {/* BOTONES FORMULARIO */}
      <div className="inline-flex py-6 gap-6 ">
        <button
          type="submit"
          className="px-5 py-2 justify-center bg-blue-700 rounded-md text-white font-sans font-semibold text-sm hover:bg-blue-800"
        >
          Publish
        </button>
        <button
          type="button"
          className="p-2 rounded-md text-black font-sans text-sm hover:bg-indigo-100 bg-opacity-25 "
        >
          Save draft
        </button>
        <button
          type="button"
          className="p-2 rounded-md text-black font-sans text-xl hover:bg-indigo-100 bg-opacity-25 "
        >
          <PiNutBold />
        </button>
        <button
          type="button"
          className="p-2 rounded-md text-black font-sans text-sm hover:bg-indigo-100 bg-opacity-25 "
        >
          Revert new changes
        </button>
      </div>
    </main>
  );
}
