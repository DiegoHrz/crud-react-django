import { useForm } from "react-hook-form";
import { createTask } from "../api/tasks.api";
import { Navigate, useNavigate } from "react-router-dom";



const TaskFormPage = () => {
  const { register, handleSubmit, formState:{errors} } = useForm();

  //si quisiera validaciones mas complejas podria usar 2 bibliotecas que se unen a react Form:
  // zod
  // yup

  const navigate = useNavigate()

  const submit = handleSubmit((data) => {
    console.log(data);
    createTask(data) 
    navigate('/tasks')
  });

  return (
    <div>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="title"
          {...register("title", { required: true })}
        />
        {errors.title && <span>This field is required</span>}
        <textarea
          rows={3}
          placeholder="Description"
          {...register("description", { required: true })}
          id=""
        ></textarea>
        {errors.description && <span>This field is required</span>}   
        <button>Save</button>
      </form>
    </div>
  );
};

export default TaskFormPage;
