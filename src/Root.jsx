import { Outlet, Link } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import { RxTextAlignJustify } from "react-icons/rx";
import { RxCaretDown } from "react-icons/rx";




const Root = () => {




 return (
   <div>
     <nav className="justify-end p-2 bg-black items-center hidden md:flex md:visible">
      <div className="hidden lg:flex lg:visible">
       <HiOutlineSearch color="white" size={24} />
      </div>
      <ul className="flex space-x-4 text-white">
         <div className="hidden lg:flex lg:visible">
           <li className="ml-1">
             <Link to={"/"}>Search</Link>
           </li>
         </div>
         <div className="flex space-x-4">
           <li>
             <Link to={"/"}>Support</Link>
           </li>
           <li>
             <Link to={"./About"}>1.888.799.9666</Link>
           </li>
           <li>
             <Link to={"./About"}>Request a Demo</Link>
           </li>
         </div>
         <div className="flex space-x-4 border-l-2 border-zinc-600 pl-4 pr-2">
           <li>
             <Link to={"./About"}>Join</Link>
           </li>
           <li className="flex items-center">
             <Link to={"./About"}>Host</Link>
             <RxCaretDown />
           </li>
           <li>
             <Link to={"./About"}>Sign in</Link>
           </li>
         </div>
       </ul>
     </nav>
      <div className="p-2">
       <div className="flex justify-between ">
         <div className="flex items-center">
           <img
             src="https://st2.zoom.us/static/6.3.10815/image/new/topNav/Zoom_logo.svg"
             className="p-2 h-10"
             alt="Zoom Logo"
           />
           <ul className="space-x-4 text-black hidden lg:flex lg:visible items-center">
             <li>
               <Link to={"/"} className="ml-8 text-lg">
                 Products
               </Link>
             </li>
             <li>
               <Link to={"/"} className="ml-8 text-lg">
                 Solutions
               </Link>
             </li>
             <li>
               <Link to={"./About"} className="ml-8 text-lg">
                 Resources
               </Link>
             </li>
             <li className="w-40">
               <Link to={"./About"} className="ml-8 text-lg">
                 Plans & Pricing
               </Link>
             </li>
           </ul>
         </div>
         <div className="text-lg items-center flex md:invisible">
           <button className=" text-blue-600 font-bold ">Join</button>
           <button className="px-4 text-blue-600 font-bold">Host</button>
           <RxTextAlignJustify size={30} color="blue" />
         </div>
         <div className="text-lg items-center hidden md:flex md:visible mr-5]">
           <button className="border border-blue-600 rounded-full px-5 py-[6px] text-blue-600 font-bold w-[160px]">
             Contact Sales
           </button>
           <button className="border border-blue-600 rounded-full px-5 py-[6px] text-blue-600 font-bold ml-2 mr-2 w-[160px]">
             Sign Up Free
           </button>
           <div className="lg:hidden">
           <RxTextAlignJustify size={30} color="blue" />
         </div>
         </div>
       </div>
       <main>
       <Outlet />
       </main>
       </div>
   </div>
 );
}


export default Root;

