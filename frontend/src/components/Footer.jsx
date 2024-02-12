import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BsTelephone, BsTwitter, BsTwitterX } from 'react-icons/bs'
import { MdLocationPin, MdMail } from 'react-icons/md'

export default function Footer() {

    return (
        <footer className="body-font bg-black" >
            <div className="container px-5 pt-16 mx-auto" >
                <div className="flex flex-wrap md:text-left text-center order-first">
                    <div className="lg:w-1/3 md:w-1/2 w-full sm:px-4 flex flex-col justify-center items-center" >
                        <h2 className="title-font font-semibold text-orange-500 tracking-widest text-sm mb-3 lg:text-xl" >Quick Link</h2>
                        <nav className="list-none w-full sm:w-[400px] mb-5 text-sm lg:text-lg flex justify-center gap-x-1 ">
                            <li>
                                <Link to='/' className="text-gray-100  cursor-pointer " >Home |</Link>
                            </li>
                            <li>
                                <Link to='/about' className="text-gray-100  cursor-pointer" >About |</Link>
                            </li>
                            <li>
                                <Link to='/ourteam' className="text-gray-100  cursor-pointer" >Team |</Link>
                            </li>
                            <li>
                                <Link to='/achivements' className="text-gray-100  cursor-pointer" >Achivements |</Link>
                            </li>
                            <li>
                                <Link to='/contact' className="text-gray-100  cursor-pointer" >Contact us</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4 flex flex-col justify-center items-center lg:pl-20">
                        <h2 className="title-font text-orange-500 font-semibold tracking-widest text-sm mb-3 uppercase lg:text-lg" >About</h2>
                        <nav className="list-none mb-10 text-slate-50 text-center">
                            <p> We participate in SAE Collegiate competitions like BAJA SAEINDIA & BAJA SAE International.</p>
                        </nav>
                    </div>

                    <div className="lg:w-1/4 md:w-1/2 w-full px-4 flex flex-col justify-center items-center md:ml-28 ">
                            
                        <nav className="list-none mt-5">
                            <li>
                                <p className="text-gray-100  lg:text-base text-center flex justify-center items-center" ><MdLocationPin size={35}/> <span> <br/>  </span></p>
                            </li>
                            <li>
                                <p className="text-gray-100  lg:text-base flex gap-x-5 my-3 items-center justify-center" ><BsTelephone size={25}/><span></span></p>
                            </li>
                            <li>
                                <p className="text-gray-100  lg:text-base flex gap-x-5 my-3 items-center justify-center" ><MdMail size={25}/><span></span> </p>
                            </li>
                        </nav>
                    </div>
                </div>
                
            </div>

            {/* <div className="bg-gray-200"> */}
                <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
                    <Link to={'/'} className='flex'>
                        <div className="flex ">
                            <h1 className=' text-2xl font-bold text-white  px-2 py-1 rounded' >Notes <span className='text-orange-500'>Zipper</span></h1>
                        </div>
                    </Link>
                    <p className="text-sm text-gray-100 sm:ml-6 sm:mt-0 mt-4" >© 2023 Abcwhdjwh —
                        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-100 ml-1" target="_blank" >www.shiddhant.com</a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mr-20 sm:mt-0 mt-4 justify-center text-white  sm:justify-start">
                        <a href='https://www.facebook.com/teamdaksh.nitjsr/' target='_blank' className=" cursor-pointer hover:text-orange-500">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                            </svg>
                        </a>
                        
                        <a href="https://www.instagram.com/team.daksh/" target='_blank' className="ml-3  cursor-pointer hover:text-orange-500">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                            </svg>
                        </a>
                        <a href='https://in.linkedin.com/company/teamdaksh' target='_blank' className="ml-3  cursor-pointer hover:text-orange-500">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                <circle cx={4} cy={4} r={2} stroke="none" />
                            </svg>
                        </a>
                        <a href='https://in.linkedin.com/company/teamdaksh' target='_blank' className="ml-3  cursor-pointer hover:text-orange-500">
                            <BsTwitterX/>
                        </a>
                    </span>
                </div>
            {/* </div> */}
        </footer>
    )
}
