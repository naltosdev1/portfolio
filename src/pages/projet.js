import { useState, useEffect } from "react";
import php from '../../public/php.svg';
import Image from 'next/image'
import next from '../../public/nextjs-icon.svg'

export default function Project() {
  const [projects, setProject] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8000/getAllProject.php");
      const data = await response.json();
      setProject(data.project);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="flex-col mt-12 flex">
        <h1 className="text-white text-3xl font-semibold font-roboto">
          Project 🔍
        </h1>
        <h2 className="text-white text-xl font-normal font-roboto mt-2">
          Some of the projects I've made.
        </h2>
        <div className="2xl:grid grid-cols-2 gap-6 mt-6">
          <div className="w-auto h-72 bg-neutral-800 rounded transition duration-150 ease-in-out hover:shadow-md hover:shadow-black border-b-4 border-blue-600">
            <div>
              {projects.map((project) => (
                <div key={project.id} className="flex flex-col relative">
                  <h1 className="text-white text-2xl font-semibold font-roboto mt-4 ml-4">
                    Projet: <a className="text-blue-400">{project.name}</a>
                  </h1>
                  <h2 className="text-white font-semibold font-roboto mt-5 absolute right-5">
                    <a>Crée le: </a>{project.createdAt}.
                  </h2>
                  <h2 className="text-white text-xl font-normal font-roboto mt-4 ml-4">
                    <a>Description: </a>{project.description}.
                  </h2>
                  <h2 className="relative flex text-white text-xl font-normal font-roboto mt-4 ml-4">
                    Langage utilisé: <a className="text-blue-400 ml-2 font-semibold">{project.langage} & NextJS</a>
                    <Image className="w-12 absolute left-0 top-12 transition duration-150 ease-in-out hover:skew-y-12" src={php} alt='Une image'/>
                    <Image className="w-12 absolute left-16 top-12 transition duration-150 ease-in-out hover:skew-y-12" src={next} alt='Une image'/>
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* Telecharge tailwind extension !! */
