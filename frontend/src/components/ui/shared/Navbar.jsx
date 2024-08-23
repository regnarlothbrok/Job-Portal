import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LogOutIcon, User2 } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar() {
    const user = false;
    return (
        
        <>
            <div className='bg-white'>
                <div className='flex item-center justify-between mx-auto max-w-7xl h-16'>
                    <div>
                        <h1 className='text-2xl font-bold'>Job <span className='text-[#F83002]'>Portal</span></h1>
                    </div>
                    <div className='flex items-center gap-4'>
                        <ul className='flex font-medium items-center gap-5'>
                            <li>Home</li>
                            <li>Job</li>
                            <li>Browse</li>
                        </ul>
                        {
                            !user ? (
                                <>
                                 <div className='flex items-center gap-4'><Link to='/login'><Button variant='outline'>Login</Button></Link>
                                <Link to='/signup'> <Button className='bg-[#6A38C2] hover:bf-[#5b30a6]'>Sign Up</Button></Link></div>
                                </>
                               
                            ):(
                                <Popover>
                            <PopoverTrigger asChild>
                                <Avatar className='cursor-pointer'>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                </Avatar>
                            </PopoverTrigger>
                            <PopoverContent className='w-80'>
                                <div>
                                    <div className='flex gap-4 space-y-1.5'>
                                        <Avatar className='cursor-pointer'>
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <div className=''>
                                            <h4>Mr. Bean</h4>
                                            <p className='text-sm text-muted-foreground'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                                            <div className='flex flex-col text-gray-600'>
                                                <div className='flex w-fit items-center gap-2 curso-pointer'>
                                                <User2/>
                                                <Button variant='link'>View Profile</Button>
                                                </div>
                                                <div className='flex w-fit items-center gap-2 curso-pointer'>
                                                <LogOutIcon/>
                                                <Button variant='link'>Log Out</Button>
                                                </div>
                                                
                                               
                                            </div>
                                        </div>


                                    </div>
                                </div>


                            </PopoverContent>
                        </Popover>
                            )
                        }
                        
                    </div>

                </div>

            </div>


        </>
    )
}

export default Navbar