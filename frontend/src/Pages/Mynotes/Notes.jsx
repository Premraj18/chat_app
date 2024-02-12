import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Accordian from './Accordian'
import MainScreen from '../MainScreen'
import axios from 'axios'

const Notes = () => {

    const [notes, setnotes] = useState([])

    const fetchNotes = async () => {
        const {data} = await axios.get('http://localhost:4000/api/notes');
        
        setnotes(data)
    };

    console.log(notes)

    useEffect(() => {
        fetchNotes();
    },[])
   
    return (
        <MainScreen title='Welcome Back Prem Raj'>
            <div className='flex flex-col mx-20 mb-20'>
                <Link to='createnote'>
                    <button className='border-orange-600 border-2 hover:text-white hover:bg-orange-500 text-black  p-2 py-1 sm:py-2 mt-5 mb-10 rounded'>
                        Create New Note
                    </button>
                </Link>
                {
                    notes.map((d) => {
                        const { id } = d;
                        return <Accordian key={id} {...d} />
                    })
                    
                }

            </div>
        </MainScreen>
    )
}

export default Notes
