import { Fragment, useContext, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Link, useLocation } from 'react-router-dom'
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  let { pathname } = useLocation()
  let subpage = pathname.split('/')?.[1]
  // console.log(subpage)

  function Linkness(type = null) {
    if (subpage === '') {
      subpage = 'home'
    }
    let classes = 'text-sm font-medium  hover:text-orange-600 '

    if (type === subpage) {
      classes += 'text-orange-600 rounded-3xl p-2'
    }
    else {
      classes += ' '
    }

    // console.log(classes)
    return classes
  }



  return (
    <div className="sticky top-0 z-10">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-white bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-12">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 "
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flex flex-col w-full justify-center items-center space-y-8 my-5">
                    <Link to={'/'} className={Linkness('home')}>
                      HOME
                    </Link>
                    <Link to={'/notes'} className={Linkness('notes')}>
                      Notes
                    </Link>
                    <Link to={'/myprofile'} className={Linkness('myprofile')}>
                      My Profile
                    </Link>
                    <Link to={'/logout'} className={Linkness('logout')}>
                      Logout
                    </Link>
                  </div>

                  <div className="flex md:ml-96 items-center justify-center">
                    <input type="text" name="" id="" placeholder='Search here' className='border p-2 rounded-lg' />
                  </div>

                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* desktop  */}
      <header className="relative bg-white shadow-md h-16 z-50"

      >
        {/* <p className="flex h-5 items-center justify-center bg-pink-600 px-4 text-sm font-medium  sm:px-6 lg:px-8" style={{ backgroundColor: mode === 'dark' ? 'rgb(62 64 66)' : '', color: mode === 'dark' ? 'white' : '', }}>
          Get free delivery on orders over ₹300
        </p> */}

        <nav aria-label="Top" className="h-full px-4 sm:px-6 lg:px-8  ">
          <div className="">
            <div className="flex h-16 ">
              <button
                type="button"
                className="rounded-md bg-white p-2  lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

              </button>



              {/* Logo */}
              <div className="flex justify-evenly items-center w-full">
                <div className="ml-4 flex lg:ml-0">
                  <Link to={'/'} className='flex'>
                    <div className="flex ">
                      <h1 className=' text-3xl font-bold   px-2 py-1 rounded'>Notes <span className='text-orange-600'>Zipper</span></h1>
                    </div>
                  </Link>
                </div>

                <div className="md:flex hidden shadow rounded-lg md:ml-60 xl:ml-96 items-center justify-center">
                  <input type="text" name="" id="" placeholder='Search here' className='border p-2 rounded-lg' />
                </div>

                {/* <div className="ml-auto flex items-center"> */}
                <div className="hidden lg:flex lg:flex-1 lg:items-center justify-end xl:space-x-8 lg:space-x-6">
                  <Link to={'/'} className={Linkness('home')}>
                    HOME
                  </Link>
                  <Link to={'/notes'} className={Linkness('notes')}>
                    Notes
                  </Link>
                  <Link to={'/myprofile'} className={Linkness('myprofile')}>
                    My Profile
                  </Link>
                  <Link to={'/logout'} className={Linkness('logout')}>
                    Logout
                  </Link>
                </div>
              </div>


            </div>
          </div>
        </nav>
      </header>
    </div >
  )
}