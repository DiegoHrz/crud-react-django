import { useForm } from "react-hook-form";
import { createTask, deleteTask, updateTask, getTask } from "../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

const TaskFormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  //si quisiera validaciones mas complejas podria usar 2 bibliotecas que se unen a react Form:
  // zod
  // yup

  const navigate = useNavigate();
  const params = useParams();
  console.log(params);

  const submit = handleSubmit(async (data) => {
    if (params.id) {
      console.log(data);
      await updateTask(params.id, data);
    } else {
      createTask(data);
      toast.success("Tarea Creada", 
      //   {
      //   position: "bottom-right",
      //   style: {
      //     background: "#101010",
      //     color: "#fff",
      //   },
      // }
    );
    }
    navigate("/tasks");
  });

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        // const res = await getTask(params.id);
        // const {data:title,description} = await getTask(params.id);
        const { data } = await getTask(params.id);
        //  setValue('title', title)
        setValue("title", data.title);
        setValue("description", data.description);
      }
    };
    loadTask();

    return () => {};
  }, []);

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
