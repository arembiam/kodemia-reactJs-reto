import { useForm } from "react-hook-form";
export default function NewPost() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <main>
      <div>
        <span>Create Post</span>
        <span>Edit</span>
        <span>Preview</span>
        <button type="button">x</button>
      </div>
      <div>
        <button type="button">Add a cover image</button>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="New post title here..."
            required
            {...register("title")}
          />
          <input
            type="text"
            placeholder="Add up to 4 tags..."
            required
            {...register("tags")}
          />
          {/* <div>d</div> Aquí va una barra de formato de texto  */}
          <input
            type="text"
            placeholder="Write your post content here..."
            required
            {...register("content")}
          />
        </form>
      </div>
      <div>
        <button type="submit">Publish</button>
        <span>Save</span>
        <span>X</span>
        <span>Revert</span>
      </div>
    </main>
  );
}
