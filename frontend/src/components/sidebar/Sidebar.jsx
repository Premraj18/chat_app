import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";


const Sidebar = () => {
	const data = (JSON.parse(localStorage.getItem('chat-user')))

	return (
		<div className='border-r border-slate-500 p-4 flex flex-col w-80 h-full shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<SearchInput />
			<div className=' px-3 py-3'></div>
			<Conversations />
			<div className=' px-2 py-3 md:pt-40 pt-10 text-white'>
				<p className="my-2">{data.fullName}</p>
				<LogoutButton />
			</div>
		</div>
	);
};
export default Sidebar;