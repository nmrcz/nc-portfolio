import Image from 'next/image'

export default function Card({ title, type, visual, description, tags, github }){
  return (
    <div className="snap-center shrink-0 first:pl-8 last:pr-8">
    <section className="panel grid grid-cols-2 transition max-w-lg p-6 border rounded-lg shadow bg-gray-800 border-gray-700 hover:bg-gray-700">
      <div className="grid px-4 py-2">
        <Image className="rounded-lg"	style={{objectFit: "cover", width: "auto", height: "auto"}} priority src={visual} alt="Project Preview" width={200} height={200}></Image>
      </div>
      <div className="col-span-1 d-flex">
        <h5 className="content-center mb-2 text-2xl font-bold tracking-tight text-white">{title}
        <span className="ml-4 text-xs font-bold tracking-tight text-gray-500 italic"> ({type})</span>
        </h5>
        

        <p className="text-gray-400">{description}</p>
        <ul className="mt-2 flex flex-wrap mb-10">
            {tags.map((i) => 
              <li key={i} className="mr-1.5 my-1">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 gap-2">{i}</div>
              </li>
            )}
        </ul>
        <a href={github} target="_blank" className="gap-2 flex text-gray-500 italic transition hover:text-cyan-500"> 
        <span className="sr-only">Github</span>
        view project repo
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 64 64">
          <path d="M32,6c-14.359,0 -26,11.641 -26,26c0,12.277 8.512,22.56 19.955,25.286c-0.592,-0.141 -1.179,-0.299 -1.755,-0.479v-5.957c0,0 -0.975,0.325 -2.275,0.325c-3.637,0 -5.148,-3.245 -5.525,-4.875c-0.229,-0.993 -0.827,-1.934 -1.469,-2.509c-0.767,-0.684 -1.126,-0.686 -1.131,-0.92c-0.01,-0.491 0.658,-0.471 0.975,-0.471c1.625,0 2.857,1.729 3.429,2.623c1.417,2.207 2.938,2.577 3.721,2.577c0.975,0 1.817,-0.146 2.397,-0.426c0.268,-1.888 1.108,-3.57 2.478,-4.774c-6.097,-1.219 -10.4,-4.716 -10.4,-10.4c0,-2.928 1.175,-5.619 3.133,-7.792c-0.2,-0.567 -0.533,-1.714 -0.533,-3.583c0,-1.235 0.086,-2.751 0.65,-4.225c0,0 3.708,0.026 7.205,3.338c1.614,-0.47 3.341,-0.738 5.145,-0.738c1.804,0 3.531,0.268 5.145,0.738c3.497,-3.312 7.205,-3.338 7.205,-3.338c0.567,1.474 0.65,2.99 0.65,4.225c0,2.015 -0.268,3.19 -0.432,3.697c1.898,2.153 3.032,4.802 3.032,7.678c0,5.684 -4.303,9.181 -10.4,10.4c1.628,1.43 2.6,3.513 2.6,5.85v8.557c-0.576,0.181 -1.162,0.338 -1.755,0.479c11.443,-2.726 19.955,-13.009 19.955,-25.286c0,-14.359 -11.641,-26 -26,-26zM33.813,57.93c-0.599,0.042 -1.203,0.07 -1.813,0.07c0.61,0 1.213,-0.029 1.813,-0.07zM37.786,57.346c-1.164,0.265 -2.357,0.451 -3.575,0.554c1.218,-0.103 2.411,-0.29 3.575,-0.554zM32,58c-0.61,0 -1.214,-0.028 -1.813,-0.07c0.6,0.041 1.203,0.07 1.813,0.07zM29.788,57.9c-1.217,-0.103 -2.411,-0.289 -3.574,-0.554c1.164,0.264 2.357,0.451 3.574,0.554z"></path>
        </svg>
        </a>    
      </div>
    </section>
  </div>
  )
}
