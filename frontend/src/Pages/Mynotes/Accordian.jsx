import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Accordian = ({id,title,category,content }) => {

    const [toggle, settoggle] = useState(false)

    const DeleteHandler = (id) => {
        if (window.confirm("Are you Sure?")) {

        }
    }

    return (

        <div className="rounded  w-full shadow-md bg-white flex flex-col  my-3">
            <div onClick={(e) => settoggle(!toggle)} className='flex border-b-2 bg-slate-100 justify-between h-16 items-center'>
                <div className="px-6 ">
                    <div className=" text-xl mb-2">{title}</div>
                </div>

                <div className="px-10 pt-4 pb-2">
                    <button className='border-orange-600 md:w-32 w-20 mr-5 border-2 hover:text-white hover:bg-orange-500 text-black sm:py-1 my-5  rounded'>
                        <Link to={`/note/${id}`}>Edit</Link>
                    </button>
                    <button onClick={() => DeleteHandler(id)} className='border-red-600 md:w-32 w-20 border-2 hover:text-white hover:bg-red-600 text-black sm:py-1 my-5  rounded'>
                        Delete
                    </button>
                </div>
            </div>

            {toggle &&
                <div className='pt-5 px-4 '>
                    <button className='bg-lime-600 md:w-40 w-40 text-white hover:bg-lime-700 p-1 mb-3 rounded'>
                        Category - {category}
                    </button>
                    <p>{content}</p>
                    <p className='text-slate-400 py-5'>-Created On Date</p>
                </div>

            }


        </div>

    )
}

export default Accordian
