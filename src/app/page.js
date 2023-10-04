'use client'
import { useHorizontalScroll } from "./useSideScroll";
import Image from 'next/image'
import Card from "./card";

export default function Home() {
  const scrollRef = useHorizontalScroll();
  const frontEnd = Array("HTML5", "CSS3", "XML", "Javascript", "Typescript", "React", "Bootstrap", "Tailwind")
  const backEnd = Array("Mongodb", "PHP","Firebase", "Python", "Java", "Django", "C", "C++", "SQL", "BashShell")

  return (
      <div className="smooth-scroll-wrapper mx-auto min-h-screen max-w-screen-xl px-32 py-12 font-sans relative overflow-hidden">
        <header className="lg:flex ">
          <div className="lg:w-1/2">
            <h1 className="mt-4 text-6xl font-bold tracking-tight text-slate-200">
              Nomar Chavez
            </h1>

            <p className="mt-4 max-w-md leading-normal text-slate-400">
              Hi, I&apos;m Nomar and I love problem solving with a creative perspective.
              I am currently learning Next.js (and React) to slowly work on a eCommerce website for my digital art.
            </p>
            
            <p className="mt-4 max-w-md leading-normal text-slate-400">
              When I am not on the computer, I am probably creating artwork for loved ones, 
              playing music I hear in video games on the piano, or enjoying outdoor activities!
            </p>

            <p className="mt-4 mb-2 max-w-md leading-normal text-slate-400">
              Contact me here:
            </p>

            <u className="mb-4 flex items-center list-none">
              <li className="mr-5 text-xs">
                <a className="block transition hover:text-slate-800" href="https://www.linkedin.com/in/nomar-chavez-791361250/" target="_blank" rel="noreferrer">
                  <span className="sr-only">Linkedin</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 48 48">
                  <path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path>
                  </svg>
                  </a>
              </li>
              <li className="mr-5 text-xs">
                <a className="block transition hover:text-slate-800" href="https://github.com/nmrchvz" target="_blank" rel="noreferrer">
                  <span className="sr-only">Github</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 64 64">
                  <path d="M32,6c-14.359,0 -26,11.641 -26,26c0,12.277 8.512,22.56 19.955,25.286c-0.592,-0.141 -1.179,-0.299 -1.755,-0.479v-5.957c0,0 -0.975,0.325 -2.275,0.325c-3.637,0 -5.148,-3.245 -5.525,-4.875c-0.229,-0.993 -0.827,-1.934 -1.469,-2.509c-0.767,-0.684 -1.126,-0.686 -1.131,-0.92c-0.01,-0.491 0.658,-0.471 0.975,-0.471c1.625,0 2.857,1.729 3.429,2.623c1.417,2.207 2.938,2.577 3.721,2.577c0.975,0 1.817,-0.146 2.397,-0.426c0.268,-1.888 1.108,-3.57 2.478,-4.774c-6.097,-1.219 -10.4,-4.716 -10.4,-10.4c0,-2.928 1.175,-5.619 3.133,-7.792c-0.2,-0.567 -0.533,-1.714 -0.533,-3.583c0,-1.235 0.086,-2.751 0.65,-4.225c0,0 3.708,0.026 7.205,3.338c1.614,-0.47 3.341,-0.738 5.145,-0.738c1.804,0 3.531,0.268 5.145,0.738c3.497,-3.312 7.205,-3.338 7.205,-3.338c0.567,1.474 0.65,2.99 0.65,4.225c0,2.015 -0.268,3.19 -0.432,3.697c1.898,2.153 3.032,4.802 3.032,7.678c0,5.684 -4.303,9.181 -10.4,10.4c1.628,1.43 2.6,3.513 2.6,5.85v8.557c-0.576,0.181 -1.162,0.338 -1.755,0.479c11.443,-2.726 19.955,-13.009 19.955,-25.286c0,-14.359 -11.641,-26 -26,-26zM33.813,57.93c-0.599,0.042 -1.203,0.07 -1.813,0.07c0.61,0 1.213,-0.029 1.813,-0.07zM37.786,57.346c-1.164,0.265 -2.357,0.451 -3.575,0.554c1.218,-0.103 2.411,-0.29 3.575,-0.554zM32,58c-0.61,0 -1.214,-0.028 -1.813,-0.07c0.6,0.041 1.203,0.07 1.813,0.07zM29.788,57.9c-1.217,-0.103 -2.411,-0.289 -3.574,-0.554c1.164,0.264 2.357,0.451 3.574,0.554z"></path>
                  </svg>
                  </a>
              </li>
              <li className="mr-5 text-xs">
                <a className="block transition hover:text-slate-800" href="mailto:npchavez99@gmail.com	" target="_blank" rel="noreferrer">
                  <span className="sr-only">Email</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
                  <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
                  </svg>
                </a>
              </li>
            </u>
          </div>

          <div className="lg:w-1/2">
            <h3 className="text-xl pt-10">Front End Skills: </h3>
            <ul className="mt-2 flex flex-wrap">
            {frontEnd.map((i) => 
              <li key={i} className="mr-1.5 my-1">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-md font-medium leading-5 text-sky-300 gap-2">
                    {i} <Image alt="" src={`/icons/${i}.svg`} width="30" height="30"></Image>
                  </div>
              </li>
            )}
            </ul>
            <h3 className="text-xl pt-5">Back End Skills: </h3>
            <ul className="mt-2 flex flex-wrap">
            {backEnd.map((i) => 
              <li key={i} className="mr-1.5 my-1">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-md font-medium leading-5 text-sky-300 gap-2">
                    {i} <Image alt="" src={`/icons/${i}.svg`} width="30" height="30"></Image>
                  </div>
              </li>
            )}
            </ul>
          </div>
        </header>

        <main className="relative rounded-xl overflow-auto my-4" >
          <h3 className="text-2xl">Featured Projects: </h3>
          <div className="flex items-end justify-start">
            {/** <div className="absolute top-0 bottom-0 left-1/2 border-l border-indigo-500"></div> */}
          </div>
  
          <container ref={scrollRef} id="inside" className="snap-x container relative w-full flex gap-6 overflow-x-auto py-4">
            <Card 
              title={"BonVoyage"} 
              type={"Mobile App"} 
              visual={"/previews/bonvoyage-preview.gif"} 
              tags={["Java", "HTML", "CSS", "XML", "Firebase", "Google Maps API", "QR Code", "TravisCI"]} 
              github={"https://github.com/CMPUT301W20T15/bonvoyage"}
              description={"A real-time ride-hailing application that makes transportation easy, quick, and simple for both riders and drivers."} 
            />

            <Card 
              title={"BetterSocial"} 
              type={"Web App"} 
              visual={"/previews/bettersocial-preview.png"} 
              tags={["Python", "Django", "Heroku", "HTML", "CSS", "JavasScript"]} 
              github={"https://github.com/CMPUT404-F21T0/CMPUT404-Project-BetterSocial"}
              description={"A social network platform that allows users to post, share, like, and comment on content that is connected, local and peer-to-peer, to other social networks with similar API structures."} 
            />

            <Card 
              title={"Quikdex"} 
              type={"React App"} 
              visual={"/previews/quikdex-preview.gif"} 
              tags={["React", "Bootstrap", "JavasScript", "pokeapi.co"]} 
              github={"https://github.com/nmrcz/poke-dex"}
              description={"A program that utilizes the react framework and public pokeapi.co API to visualize more than 900+ pokémon data such as type, abilities, description and more."} 
            />

            <Card 
              title={"Crime Data Visualizer"} 
              type={"Python App"} 
              visual={"/previews/crime-preview.png"} 
              tags={["Python", "Matplotlib", "SQLite"]} 
              github={"https://github.com/adriancleung/cmput291-assignment4o"}
              description={"A program that utilizes DBMS to visualize the crime types related to the population and neighbourhoods within the city of Edmonton."} 
            />

            <Card 
              title={"Portfolio"} 
              type={"NextJS App"} 
              visual={"/previews/portfolio-preview.jpg"} 
              tags={["Next.js", "React", "JavasScript", "Tailwind"]} 
              github={"https://github.com/nmrcz/nc-portfolio"}
              description={"This is what you're looking at right now! My portfolio that was created using Next.js and deployed in Vercel."} 
            />

          </container>
        </main>
      </div>
  )
}