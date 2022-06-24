import BurgerMenu from "../Navigation/BurgerMenu";
import Image from 'next/image'

export default function All () {
    return (
<div className="overflow-hidden h-screen w-full relative">
    <div className="">
    <Image layout='fill' src="https://www.tailwind-kit.com/images/landscape/5.svg" className="h-screen w-full object-cover"/>
    </div>
    <div className="inset-0 bg-black opacity-25 absolute">
    </div>
    <header className="absolute top-0 left-0 right-0 z-20">
        <BurgerMenu/>
    </header>
    <div className="container mx-auto px-6 md:px-12 relative z-10 items-center py-32 xl:py-40 ">
        <div className="justify-around grid-col sm:grid-cols-3 grid">
        <div className="flex justify-center sm:col-span-1">
            <img src='./img/ity.png' className="h-40 sm:h-full "/>
        </div>
        <div className="flex flex-col items-start justify-center relative z-10 p-8 sm:col-span-2">
            <h1 className="font-bold text-4xl sm:text-5xl text-white leading-tight mb-8">
            Interactive Study Academy for Kids                  
            </h1>
            <p className="font-medium uppercase text-gray-200 py-4">
            International distance school of <br className="hidden sm:block"/>intellectual and creative development
            </p>
        </div>
        </div>
        <div className="flex justify-center mt-10 md:mt-32">
        <a href="#" className="bg-white hover:bg-blue-100 py-3 px-4 rounded-lg text-lg text-center text-gray-800 font-bold uppercase">
            Apply now
        </a>
        </div>
    </div>
</div>
    )
}