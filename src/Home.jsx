import {FiBell } from "react-icons/fi";
import { HiChevronRight } from "react-icons/hi";
import Card from "./Card";
import { SlGraduation } from "react-icons/sl";
import { GiGreekTemple } from "react-icons/gi";
import { BiPurchaseTag } from "react-icons/bi";
import { MdOutlineMedicalServices } from "react-icons/md";
import { SlSocialDropbox } from "react-icons/sl";
import { CiBag1 } from "react-icons/ci";

function Home() {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex-col xl:ml-8">
          <button className=" flex bg-cyan-50 rounded-full px-2 py-1 border border-cyan-500 items-center mt-6 ml-3 text-sm hover:bg-cyan-800 md:text-base">
            <div className="mr-2 bg-cyan-400 rounded-full p-[2px]">
              <FiBell />
            </div>
            <div className="pr-">
              Next Work Transformation Summit - Jan. 18th 9am PT
            </div>
            <div className="flex ml-2 border-l-2 text-Zoom-blue pl-4 w-36">
              Register now
              <HiChevronRight color="text-blue-600" size="23" />
            </div>
          </button>
          <h1 className="text-4xl mt-14 mb-4 ml-3 xl:text-6xl font-bold xl:font-semibold xl:mb-16">
            One platform <br></br>to{" "}
            <span className="text-Zoom-blue">create</span>
          </h1>
          <h2 className="mb-5 ml-3 text-base mr-10 lg:pr-28 xl:text-xl xl:w-[35rem]">
            Bring teams together, reimagine workspaces, engage new audiences,
            and delight your customers — all on the Zoom platform you know and
            love.
          </h2>
          <div className="xl:mt-16">
            <button className="text-lg bg-Zoom-blue border border-Zoom-blue rounded-full px-5 py-1 text-white ml-3 mr-6">
              Plans & Pricing
            </button>
            <button className=" text-Zoom-blue ml-2 mr-16">
              Sign Up, It´s Free
            </button>
            <div className="mx-6 mt-10 md:hidden">
              <img
                src="./notes-woman-scaled.jpg "
                alt="Woman in Zoom-meeting"
              />
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:visible mr-10 xl:mr-2">
          <img
            src="./public/notes-woman-scaled.jpg "
            alt="Woman in Zoom-meeting"
            className="mt-3 ml-6 h-[24rem] w-[36rem] xl:w-[340rem]"
          />
        </div>
      </div>
      <div className="flex-col bg-wheel-background mt-32 md:relative md:h-[370px]">
        <div className="flex justify-center md:justify-start">
          <img
            src="https://st2.zoom.us/static/6.3.10815/image/home2/zm-product-wheel.png"
            alt="Zoom-wheel"
            className="max-w-[350px] md:mt-[-40px] md:absolute md:min-w-[450px] xl:ml-10"
          />
        </div>
        <div className="flex-col text-blue-300 md:ml-[450px] ml-10 md:mt-16 xl:ml-[540px] xl:mt-24">
          <h2 className="text-3xl font-semibold">Make work less work</h2>
          <p className="pt-6 pr-16">
            Securely connect and collaborate so you can work better together.
            Simple to manage and delightful to use, Zoom powers the modern
            workforce.
          </p>
          <p className="pt-4 pb-14 font-semibold hover:text-white cursor-pointer">Discover the Possibilities</p>
        </div>
      </div>
      <div className="md:flex md:visible mt-8 ml-2 md:ml-8 md:mt-24">
        <div className="flex-col w-4/4 mr-14 md:mr-12 md:w-2/4 md:mt-6">
          <h1 className="mb-10 text-2xl font-semibold md:mb-6 text-gray-600">
            Powering organizations across industries and geographies
          </h1>
          <p className="mb-4 text-base text-gray-600">
            Zoom helps consolidate communications, connect people, and
            collaborate better together in the boardroom, classroom, operating
            room, and everywhere in between.
          </p>
          <button className="bg-teal-200 py-1 px-5 rounded-full mb-6 text-lg">
            Explore Industry Solutions
          </button>
        </div>
        <div className=" md:w-2/4 md:mr-4">
          <div className="flex">
            <Card icon={<SlGraduation size="40px" />} title={"Education"} />
            <Card icon={<CiBag1 size="40px" />} title={"Financial Services"} />
          </div>
          <div className="flex">
            <Card icon={<GiGreekTemple size="40px" />} title={"Government"} />
            <Card
              icon={<MdOutlineMedicalServices size="40px" />}
              title={"Healthcare"}
            />
          </div>
          <div className="flex">
            <Card
              icon={<SlSocialDropbox size="40px" />}
              title={"Manufacturing"}
            />
            <Card icon={<BiPurchaseTag size="40px" />} title={"Retall"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
