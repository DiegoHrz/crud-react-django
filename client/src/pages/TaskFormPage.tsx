import { useForm } from "react-hook-form";
import { createTask, deleteTask } from "../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom";

const TaskFormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //si quisiera validaciones mas complejas podria usar 2 bibliotecas que se unen a react Form:
  // zod
  // yup

  const navigate = useNavigate();
  const params = useParams();
  console.log(params);

  const submit = handleSubmit((data) => {
    console.log(data);
    createTask(data);
    navigate("/tasks");
  });

  return (
    <div className="flex flex-1 m-auto">
      <form onSubmit={submit} className="flex flex-col w-full">
        <input
          className="border border-gray-600"
          type="text"
          placeholder="title"
          {...register("title", { required: true })}
        />
        {errors.title && <span>This field is required</span>}
        <textarea
          className="border border-gray-600"
          rows={3}
          placeholder="Description"
          {...register("description", { required: true })}
          id=""
        ></textarea>
        {errors.description && <span>This field is required</span>}
        <button>Save</button>
      </form>
      {params.id && (
        <button
          className="h-fit w-fit rounded-full"
          onClick={async () => {
            const accepted = window.confirm("are your sure?");
            if (accepted) {
              await deleteTask(params.id);
              navigate("/tasks");
            }
          }}
        >   
          🗑️
        </button>
      )}
    </div>
  );
};

export default TaskFormPage;
