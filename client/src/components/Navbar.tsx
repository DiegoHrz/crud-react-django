import { Link } from "react-router-dom"




const Navbar = () => {
  return (
    <div className="flex gap-10 mb-20" >
        <Link to='/tasks'> Task App </Link>
        <Link to='/tasks-create'> Create a Task </Link>
    </div>
  )
}

export default Navbar