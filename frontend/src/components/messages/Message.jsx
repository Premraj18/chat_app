import React from 'react'

const Message = () => {
    return (
        <div className='flex items-end justify-end'>
            <div className='mb-8'>
                <div className="w-10 rounded-full">
                    <img
                        src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'
                        alt='user avatar'
                    />
                </div>
            </div>
            <div>
                <div className='text-white bg-blue-500 max-w-40 p-2 m-1 rounded-lg'>Hi! What is Upp</div>
                <span className='text-white'>10:15</span>
            </div>
        </div>
    )
}

export default Message
