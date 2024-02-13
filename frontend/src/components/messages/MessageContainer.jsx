import { useEffect } from "react";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
    const noChatSelected = true;
	return (
		<div className='md:min-w-[450px] w-full flex flex-col'>
            {noChatSelected ? (
                <NoChatSelected/>
            ) : (
			<>
				{/* Header */}
				<div className='bg-slate-500 px-4 py-2 mb-2'>
					<span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>John doe</span>
				</div>

				<Messages />
				<MessageInput />
			</>
            )}
		</div>
	);
};
export default MessageContainer;

const NoChatSelected = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="text-center flex flex-col items-center text-white sm:text-lg md:text-xl font-semibold gap-2">
                <p>Welcome 👋 John Doe</p>
                <p>Select a Chat to start messeging</p>
                <TiMessages className='text-3xl md:text-5xl my-2' />
            </div>
        </div>
    )
}