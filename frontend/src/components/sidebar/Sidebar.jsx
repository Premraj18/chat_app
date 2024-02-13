import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";


const Sidebar = () => {
	return (
		<div className='border-r border-slate-500 p-4 flex flex-col w-80 h-full shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<SearchInput />
			<div className=' px-3 py-3'></div>
			<Conversations />
			<LogoutButton />
		</div>
	);
};
export default Sidebar;