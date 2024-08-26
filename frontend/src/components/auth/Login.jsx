
import Navbar from "../ui/shared/Navbar"
import { Input } from "../ui/input.jsx"
import { Label } from "@radix-ui/react-label"
import { RadioGroup } from "../ui/radio-group.jsx"
import { Button } from "../ui/button"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { USER_API_END_POINT } from "@/utils/constant"
import axios from "axios"
import { toast } from "sonner"
import { useDispatch, useSelector } from "react-redux"
import { setLoading } from "@/redux/authSlice"
import { Loader2 } from "lucide-react"





function Login() {
  const [input, setInput] = useState({

    "email": "",
    "password": "",
    "role": "",

  });
  const navigate = useNavigate();
  const disPatch = useDispatch();
  const { loading } = useSelector(store => store.auth);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("input: ", input);
    const formData = new FormData();
    formData.append("email", input.email);
    formData.append("password", input.password);
    formData.append("role", input.role);
    try {
      disPatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, formData, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true,

      });
      if (res.data.success) {
        navigate("/");
        console.log("Congratulations! You Successfully LoggedIn.");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log("Error in Logging In: ", error);
    } finally {
      disPatch(setLoading(false));
    }


  }
  return (


    <>
      <div>
        <Navbar />
        <div className="flex items-center justify-center max-w-7xl mx-auto">
          <form onSubmit={submitHandler} className=" w-1/2 border border-grey-200 p-2 rounded my-10">
            <h1 className="font-bold text-xl mb-5">Login</h1>
            <div className="my-2">
              <Label>Email</Label>
              <Input type="text"
                name="email"
                value={input.email}
                onChange={changeEventHandler}
                placeholder="prathamiu230@gmail.com" />
            </div>

            <div className="my-2">
              <Label>Password</Label>
              <Input type="password"
                name="password"
                value={input.password}
                onChange={changeEventHandler}
                placeholder="**********" />
            </div>
            <div className="flex items-center justify-between">
              <RadioGroup className="flex items-center gap-4 my-5">
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    value="Student"
                    checked={input.role === 'Student'}
                    onChange={changeEventHandler}
                    className="cursor-pointer"
                  />
                  <Label htmlFor="r1">Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    value="Recruiter"
                    checked={input.role === 'Recruiter'}
                    onChange={changeEventHandler}
                    className="cursor-pointer"
                  />
                  <Label htmlFor="r2">Recruiter</Label>
                </div>
              </RadioGroup>
            </div>
            {
              loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait </Button> : <Button type="submit" className="w-full my-4">Login</Button>
            }
            <span className='text-sm'>Do not have an account? <Link to="/signup" className='text-blue-600'>SignUp</Link></span>
          </form>
        </div>
      </div>
    </>

  )
}

export default Login