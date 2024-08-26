
import Navbar from "../ui/shared/Navbar"
import { Input } from "../ui/input.jsx"
import { Label } from "@radix-ui/react-label"
import { RadioGroup } from "../ui/radio-group.jsx"
import { Button } from "../ui/button"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { USER_API_END_POINT } from "@/utils/constant"
import { toast } from "sonner"
import { useDispatch, useSelector } from "react-redux"
import { Loader2 } from "lucide-react"
import { setLoading } from "@/redux/authSlice"








function Signup() {
  const [input,setInput] = useState({
    "fullName"    : "",
    "email"       : "",
    "phoneNumber" : "",
    "password"    : "",
    "role"        : "",
    "file"        : "",
});
const navigate = useNavigate();
const {loading} = useSelector(store=>store.auth);
const disPatch = useDispatch();
const changeEventHandler = (e)=>{
  setInput({...input, [e.target.name]:e.target.value});
}
const changeFileHandler = (e) => {
  setInput({...input,file: e.target.files?.[0]})
}
const submitHandler = async(e)=>{
  e.preventDefault();
  console.log("input: ",input);
  const formData = new FormData();
  formData.append("name",input.fullName);
  formData.append("email",input.email);
  formData.append("phoneNumber",input.phoneNumber);
  formData.append("password",input.password);
  formData.append("role",input.role);
  if(input.file) {
    formData.append("file",input.file);
  }
  try {
    disPatch(setLoading(true));
    const res = await axios.post(`${USER_API_END_POINT}/register`,formData,{
      headers: {
        "Content-Type": "multipart/form-data"
      },
      withCredentials:true,
      
    });
    if(res.data.success) {
      navigate("/login");
      console.log("Congratulations! You Successfully signedUp.");
      toast.success(res.data.message);
    }
  } catch (error) {
    console.log("Error in signing UP: ",error);
  }finally{
    disPatch(setLoading(false));
  }
  

}
  return (
    <>
      <div>
        <Navbar />
        <div className="flex items-center justify-center max-w-7xl mx-auto">
          <form onSubmit={submitHandler} className=" w-1/2 border border-grey-200 p-2 rounded my-10">
            <h1 className="font-bold text-xl mb-5">SignUp</h1>
            <div className="my-2">
              <Label>Full Name</Label>
              <Input type="text"
                     name="fullName"
                     value={input.fullName}
                     onChange={changeEventHandler}
                     placeholder="Pratham" />
            </div>
            <div className="my-2">
              <Label>Email</Label>
              <Input type="text"
                     name="email"
                     value={input.email}
                     onChange={changeEventHandler}
                     placeholder="prathamiu230@gmail.com" />
            </div>
            <div className="my-2">
              <Label>Phone Number</Label>
              <Input type="text"
                     name="phoneNumber"
                     value={input.phoneNumber}
                     onChange={changeEventHandler}
                     placeholder="1234567890" />
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
                    checked={input.role==='Student'}
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
                    checked={input.role==='Recruiter'}
                    onChange={changeEventHandler}
                    className="cursor-pointer"
                  />
                  <Label htmlFor="r2">Recruiter</Label>
                </div>
              </RadioGroup>
              <div className="flex items-center space-x-2">
                <Label>Profile</Label>
                <Input 
                  type="file"
                  accept="Image/*"
                  // value={input.file}
                  onChange={changeFileHandler}
                  className="cursor-pointer"
                />
              </div>
            </div>
            {
              loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait </Button> : <Button type="submit" className="w-full my-4">signUp</Button>
            }
            <span className='text-sm'>Already have an account? <Link to="/login" className='text-blue-600'>Login</Link></span>
          </form>
        </div>
      </div>
    </>

  )
}

export default Signup