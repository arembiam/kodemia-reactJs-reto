import { useForm } from "react-hook-form";
import { FaXmark } from "react-icons/fa6";
import { PiNutBold } from "react-icons/pi";
import { LuBold, LuItalic, LuHeading } from "react-icons/lu";
import {
  RiLink,
  RiListOrdered,
  RiListCheck,
  RiDoubleQuotesL,
  RiCodeFill,
  RiImageFill,
} from "react-icons/ri";
import { GoCodeSquare } from "react-icons/go";
import { HiOutlineBolt } from "react-icons/hi2";

export default function NewPost() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <main className="bg-slate-100 min-h-screen pt-3 px-48 flex-col flex-wrap justify-center items-center">
      {/* TOP PAGINA OPCIONES */}
      <div className="inline-flex flex-wrap py-2 w-96 min-w-0 sm:min-w-full md:min-w-0 lg:min-w-full ">
        <div className="flex-1 items-center gap-3 inline-flex max-lg:visible max-md:invisible">
          <img
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png"
            alt=""
            className="h-8 w-auto"
          />
          <span className="font-semibold">Create Post</span>
        </div>
        <div className="items-center inline-flex ">
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

      {/* FORMULARIO */}
      <div className="flex-col flex-wrap w-96 min-w-0 sm:min-w-full md:min-w-0 lg:min-w-full ">
        {/* FORMULARIO PT1  */}
        <div className=" bg-white rounded-md border border-gray-300 py-10 ">
          <div className="flex-wrap px-6 text-wrap ">
            <button
              type="button"
              className="flex border border-gray-300 p-2 rounded-md text-sm font-medium"
            >
              Add a cover image
            </button>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="New post title here..."
                required
                className="font-extrabold text-3xl py-3 placeholder-gray-600 bg-transparent  w-full focus:outline-none "
                {...register("title")}
              />
              <input
                type="text"
                placeholder="Add up to 4 tags..."
                className="flex text-sm placeholder-gray-500 py-3 bg-transparent  w-full focus:outline-none "
                required
                {...register("tags")}
              />
            </form>
          </div>

          {/* BARRA DE FORMATO TEXTO */}
          <div className="inline-flex bg-slate-100  text-lg p-4 w-full max-md:justify-center">
            <button
              type="button"
              className="hover:bg-indigo-100 bg-opacity-25 p-2 rounded-md"
            >
              <LuBold />
            </button>
            <button
              type="button"
              className="hover:bg-indigo-100 bg-opacity-25 p-2 rounded-md"
            >
              <LuItalic />
            </button>
            <button
              type="button"
              className="hover:bg-indigo-100 bg-opacity-25 p-2 rounded-md"
            >
              <RiLink />
            </button>
            <button
              type="button"
              className="hover:bg-indigo-100 bg-opacity-25 p-2 rounded-md "
            >
              <RiListOrdered />
            </button>
            <button
              type="button"
              className="hover:bg-indigo-100 bg-opacity-25 p-2 rounded-md "
            >
              <RiListCheck />
            </button>

            <button
              type="button"
              className="hover:bg-indigo-100 bg-opacity-25 p-2 rounded-md "
            >
              <RiImageFill />
            </button>
            <div className="inline-flex max-lg:visible max-md:invisible">
              <button
                type="button"
                className="hover:bg-indigo-100 bg-opacity-25 p-2 rounded-md "
              >
                <LuHeading />
              </button>
              <button
                type="button"
                className="hover:bg-indigo-100 bg-opacity-25 p-2 rounded-md "
              >
                <RiDoubleQuotesL />
              </button>
              <button
                type="button"
                className="hover:bg-indigo-100 bg-opacity-25 p-2 rounded-md "
              >
                <RiCodeFill />
              </button>
              <button
                type="button"
                className="hover:bg-indigo-100 bg-opacity-25 p-2 rounded-md "
              >
                <GoCodeSquare />
              </button>
              <button
                type="button"
                className="hover:bg-indigo-100 bg-opacity-25 p-2 rounded-md "
              >
                <HiOutlineBolt />
              </button>
            </div>
          </div>

          {/* FORMULARIO PT2 */}
          <div className="py-10 px-6">
            <form action="">
              <textarea
                placeholder="Write your post content here..."
                required
                className="font-mono placeholder-gray-500 focus:outline-none w-full"
                {...register("content")}
              />
            </form>
          </div>
        </div>

        {/* BOTONES FORMULARIO */}
        <div className="inline-flex flex-wrap py-6 gap-2 w-96 min-w-0 sm:min-w-fit md:min-w-fit lg:min-w-full ">
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
      </div>
    </main>
  );
}
