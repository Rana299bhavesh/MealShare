import React,{useState} from 'react'
import login from '../assets/image/login.jpg'
import google from '../assets/image/google.png'
import facebook from '../assets/image/facebook.jpeg'
import { Link } from 'react-router-dom'
const Login = () => {
        // State to track whether the checkbox is checked or unchecked
        const [isChecked, setIsChecked] = useState(false);
      
        // Handle the click event to toggle the state
        const handleClick = () => {
          setIsChecked(prevState => !prevState);
        };

  return (
    <div className='w-full bg-[#FFE0CC] overflow-hidden'>
        <div className='flex h-[100vh] w-full flex-wrap'>
            <div className='lg:h-[100vh] md:h-[100vh] h-[50vh] w-[100vw] md:w-[55vw] lg:w-[60vw]'>
                <img src={login} alt="" className='h-full w-full object-cover'/>
            </div>
            <div className='lg:h-[100vh] lg:w-[38vw] md:w-[38vw] w-[100vw] flex justify-center items-center'>
                <div className='lg:w-[36vw] md:w-[36vw] sm:w-[100vw] h-[85%] mt-10 p-5 h-full'>
                    <h1 className='lg:text-[2.5em] md:text-[1.5em] text-[1.3em] md:bg-red-100 font-semibold'>Sign in to <span className='text-[#F24822]'>MealShare</span></h1>
                    <form>
                        <input type='email' placeholder='Email' className='h-[7vh] w-[95%] p-5 lg:mt-10 md:mt-10 mt-6 text-[1em] border-[2px] outline-none bg-[#f8f8f8] border-[#000] border-opacity-[0.25] shadow-zinc-300 font-semibold rounded-lg'/>
                        <input type='password' placeholder='Password' className='h-[7vh] w-[95%] p-5 lg:mt-10 md:mt-10 mt-6 text-[1em] border-[2px] outline-none bg-[#f8f8f8] font-semibold border-[#000] border-opacity-[0.25] shadow-zinc-300 rounded-lg'/>
                        <div className='lg:w-[32vw] md:w-[34vw] sm:w-[70vw] px-2 items-center flex flex-wrap justify-between pt-2 mt-2'>
                            <i className={`${isChecked ? 'ri-checkbox-line' : 'ri-square-line'} text-[1.1rem] md:text-[1em]`} onClick={handleClick}>
                            Remember Me
                            </i>
                            <Link className='text-[#000] opacity-50 hover:opacity-70'>Forget Password?</Link>
                        </div>
                        <div className='lg:w-[36vw] md:w-[36vw] w-[70vw] mt-5 py-[10px] rounded-[20px] text-[1em] text-center bg-[#D70606] text-white hover:bg-red-700 font-semibold'>
                            <h1>Sign In</h1>
                        </div>
                    </form>
                    <div className='w-[36vw] h-[10vh] mt-10'>
                        <p className='text-[#000] opacity-50 hover:opacity-70 text-center text-[1.3rem]'>Or Login With:</p>
                        <div className='w-[36vw] mt-5 py-[5px] rounded-[20px] transition duration-300 ease-in-ease-out text-center hover:scale-110'>
                            <h1 className='flex items-center justify-center font-semibold text-[1.2rem]'>
                                <img src={google} className='h-[5vh] mr-2 rounded-full'/>
                                Google
                            </h1>
                        </div>
                        <div className='w-[36vw] mt-5 py-[5px] transition duration-300 ease-in-ease-out text-center hover:scale-110'>
                            <h1 className='flex items-center justify-center font-semibold text-[1.2rem]'>
                                <img src={facebook} className='h-[4vh] mr-2 rounded-full'/>
                                Facebook
                            </h1>
                        </div>
                        <h1 className='text-[#000] text-center mt-10 opacity-80 font-semibold text-[1rem] hover:underline'>Dont Have an Account? <Link className='text-[#D70606] opacity-100'> SignUp</Link></h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login