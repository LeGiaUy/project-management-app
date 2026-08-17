import Input from "./Input.jsx";

export default function NewProject() {
  return (
    <div className="w-140 mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
          <button>Save</button>
        </li>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" textarea />
        <Input label="Due Date" />
      </div>
    </div>
  );
}
