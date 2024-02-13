import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";


import { IoSearch } from "react-icons/io5";

const SearchInput = () => {
	return (
		<form className='flex items-center justify-between px-2 gap-2'>
			<input type='text' placeholder='Search…' className='input text-white input-bordered rounded-full p-2 bg-slate-600' />
			<button type='submit' className='btn btn-circle  text-white'>
				<IoSearch className='w-6 h-6 outline-none' />
			</button>
		</form>
	);
};
export default SearchInput;