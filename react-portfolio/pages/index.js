import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {
  AiFillGithub, 
  AiFillLinkedin, 
  AiFillInstagram,
  AiFillHtml5,
  AiFillPhone
} from "react-icons/ai"
import {
  DiCss3,
  DiJavascript,
  DiReact,
  DiPhotoshop
} from "react-icons/di";
import {
  SiSolidity,
  SiTailwindcss,
  SiMinutemailer
} from "react-icons/si";
import {FaHardHat} from "react-icons/fa";
import {BsFillPinMapFill} from "react-icons/bs";
import Image from "next/image";
import profile from "../public/profile.png";
import iMac from "../public/iMac.png";
import MacBook from "../public/MacBook.png";
import Web1 from "../public/web1.png"
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Nicholas Lazzari Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">Portfolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill 
                  onClick={() => setDarkMode(!darkMode)} 
                  className="cursor-pointer text-xl dark:text-white"
                />
              </li>
              <li><a className="bg-gradient-to-r from-orange-400 to-orange-700 text-white px-4 py-2 rounded-md ml-8" 
              href="https://sapphire-elane-33.tiiny.site/"
              >
                  Resume
                </a>
                </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-orange-500 font-medium md:text-6xl">
              Nicholas Lazzari
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Web Developer and Designer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-300">
            Current senior at Syracuse University pursuing a BS in Information Management & Technology with a concentration in Web Development. I also specialize in Web3 & Smart Contract Development.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="https://github.com/nick-lazzari">
              <AiFillGithub className="dark:text-white" />
            </a>
            <a href="https://www.linkedin.com/in/nicholaslazzari/">
              <AiFillLinkedin className="dark:text-white" />
            </a>
            <a href="https://www.instagram.com/learning.blockchain/">
              <AiFillInstagram className="dark:text-white" />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-orange-500 rounded-full w-80 h-h80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={profile} />
          </div>
        </section>
        
        <section className="px-5 py-24">
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Experience</h3>
            <p className ="text-md py-2 leading-8 text-gray-600 dark:text-gray-300">
              Prior experience working with  
              <span className="text-orange-500"> software </span> 
              and <span className="text-orange-500">design. </span> 
              Other previous work experience is detailed on my resume.
            </p>
          </div>
          <div className="lg:flex justify-around gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 max-w-lg dark:shadow-2xl">
              <Image src={iMac} width={170} height={170}/>
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">Crestron Electronics</h3>
              <p className="py-2 dark:text-white">
                Web UX/UI Developer Intern 
              </p>
              <h4 className="py-4 text-orange-500">
                Responsibilities Included:
              </h4>
              <p className="text-gray-800 py-1 dark:text-gray-300">Built website content and designs using HTML and CSS.</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">Modified and updated website to improve functionality and user experiences.</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">Created and edited website design assets using Adobe Photoshop.</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">Assisted in developing and maintaining company product pages, news articles, and blogs.</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 max-w-lg dark:shadow-2xl">
              <Image src={MacBook} width={170} height={170}/>
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">Blue Sage Enterprise</h3>
              <p className="py-2 dark:text-white">
                Software Tester
              </p>
              <h4 className="py-4 text-orange-500">
                Responsibilities Included:
              </h4>
              <p className="text-gray-800 py-1 dark:text-gray-300">Tested web application compatibility and performance.</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">Worked with off-site teams to complete timely tests and facilitate smooth product releases. </p>
              <p className="text-gray-800 py-1 dark:text-gray-300">Updated software documentation and user guides to align with current features and comply with best-practice standards.</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">Searched for bugs in newly-developed aspects of existing web applications in sandbox environments.</p>
            </div>
            
          </div>
        </section>

        <section className="px-5 py-24">
          <div>
            <h3 className="text-3xl py-2 dark:text-white">Skills</h3>
              <div className="text-5xl grid md:grid-cols-4 grid-cols-2 gap-16 pt-10 text-gray-600">
                <div>
                  <div className="flex justify-center">
                    <AiFillHtml5 className="text-orange-500 dark:text-white" />
                  </div>
                  <h4 className="flex justify-center text-lg font-medium pt-8 pb-2 dark:text-orange-500">HTML5</h4>
                </div>
                <div>
                  <div className="flex justify-center">
                    <DiCss3 className="text-orange-500 dark:text-white" />
                  </div>
                    <h4 className="flex justify-center text-lg font-medium pt-8 pb-2 dark:text-orange-500">CSS3</h4>
                </div>
                <div>
                  <div className="flex justify-center">
                    <DiJavascript className="text-orange-500 dark:text-white" />
                  </div>
                    <h4 className="flex justify-center text-lg font-medium pt-8 pb-2 dark:text-orange-500">Javascript</h4>
                </div>
                <div>
                  <div className="flex justify-center">
                    <DiReact className="text-orange-500 dark:text-white" />
                  </div>
                    <h4 className="flex justify-center text-lg font-medium pt-8 pb-2 dark:text-orange-500">ReactJS</h4>
                </div>
                <div>
                  <div className="flex justify-center">
                    <SiTailwindcss className="text-orange-500 dark:text-white" />
                  </div>
                    <h4 className="flex justify-center text-lg font-medium pt-8 pb-2 dark:text-orange-500">Tailwindcss</h4>
                </div>
                <div>
                  <div className="flex justify-center">
                    <SiSolidity className="text-orange-500 dark:text-white" />
                  </div>
                    <h4 className="flex justify-center text-lg font-medium pt-8 pb-2 dark:text-orange-500">Solidity</h4>
                </div>
                <div>
                  <div className="flex justify-center">
                    <FaHardHat className="text-orange-500 dark:text-white" />
                  </div>
                    <h4 className="flex justify-center text-lg font-medium pt-8 pb-2 dark:text-orange-500">Hardhat</h4>
                </div>
                <div>
                  <div className="flex justify-center">
                    <DiPhotoshop className="text-orange-500 dark:text-white" />
                  </div>
                    <h4 className="flex justify-center text-lg font-medium pt-8 pb-2 dark:text-orange-500">Photoshop</h4>
                </div>
              </div>
            </div>
        </section>

        <section className="px-5 py-24">
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className ="text-md py-2 leading-8 text-gray-600 dark:text-gray-300">
              Projects that I have completed. Please refer to my  
              <span className="text-orange-500"> GitHub </span> 
              for all of my 
              <span className="text-orange-500"> code. </span> 
              
            </p>
          </div>
          <div className="flex flex-col gap-20 py-10 lg:flex-row flex-wrap">
            <div className="basis-1/3 flex-1 shadow-lg">
              <Image src={Web1} href="" className="rounded-lg object-cover" width={"100%"} height={"100%"} />
            </div>
            <div className="basis-1/3 flex-1 shadow-lg">
              <Image src={Web1} className="rounded-lg object-cover" width={'100%'} height={"100%"} />
            </div>
            <div className="basis-1/3 flex-1 shadow-lg">
              <Image src={Web1} className="rounded-lg object-cover" width={'100%'} height={"100%"} />
            </div>
            <div className="basis-1/3 flex-1 shadow-lg">
              <Image src={Web1} className="rounded-lg object-cover" width={'100%'} height={"100%"} />
            </div>
          </div>
        </section>
        <section className="px-5 py-24">
          <h3 className="text-3xl py-2 dark:text-white">Contact</h3>
            <div className="text-5xl grid md:grid-cols-3 grid-cols-1 gap-16 py-3">
              <div className="rounded-xl shadow-lg py-10 my-10 max-w-lg dark:shadow-2xl">
                <div className="flex justify-center">
                  <AiFillPhone className="text-orange-500 dark:text-white" />
                </div>
                  <h4 className="flex justify-center text-lg font-medium pt-8 pb-2 dark:text-orange-500">Phone</h4>
                  <p className="flex justify-center text-sm font-medium pt-8 pb-2 text-gray-600 dark:text-gray-300">+1 201-394-4206</p>
              </div>
              <div className="rounded-xl shadow-lg py-10 my-10 max-w-lg dark:shadow-2xl">
                <div className="flex justify-center">
                  <SiMinutemailer className="text-orange-500 dark:text-white" />
                </div>
                  <h4 className="flex justify-center text-lg font-medium pt-8 pb-2 dark:text-orange-500">Email</h4>
                  <p className="flex justify-center text-sm font-medium pt-8 pb-2 text-gray-600 dark:text-gray-300">Nicklazzari15@gmail.com</p>
              </div>
              <div className="rounded-xl shadow-lg py-10 my-10 max-w-lg dark:shadow-2xl">
                <div className="flex justify-center">
                  <BsFillPinMapFill className="text-orange-500 dark:text-white" />
                </div>
                  <h4 className="flex justify-center text-xl font-large pt-8 pb-2 dark:text-orange-500">Address</h4>
                  <p className="flex justify-center text-sm font-medium pt-8 pb-2 text-gray-600 dark:text-gray-300">125 Haring street, Closter NJ</p>
              </div>
            </div>
        </section>
        <footer className="text-gray-600 body-font">
          <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 dark:text-white">
              <span className="ml-3 text-xl">Portfolio</span>
            </a>
            <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 dark:text-gray-300">© 2022 Nicholas Lazzari
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}
