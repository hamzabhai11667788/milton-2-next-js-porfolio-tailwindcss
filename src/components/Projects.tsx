import React from 'react'
import Heading from './Heading';
import Card from './Card';
const data =[
    {
        id: 0,
        title: "Resume Builder",
        desc: "A React & Typescript based  project and Orginization ",
        img: "/Capture1.jpg",
        tags: ["React","Next.js","CSS","Typescript"],
    },
    {
        id: 1,
        title: "Resume Builder",
        desc: "A React & Typescript based  project and Orginization ",
        img: "/Capture2.jpg",
        tags: ["React","Next.js","CSS","Typescript"],
    },
    {
        id: 2,
        title: "Resume Builder",
        desc: "A React & Typescript based  project and Orginization ",
        img: "/Capture3.jpg",
        tags: ["React","Next.js","CSS","Typescript"],
    },
    {
        id: 3,
        title: "Resume Builder",
        desc: "A React & Typescript based  project and Orginization ",
        img: "/Capture3.jpg",
        tags: ["React","Next.js","CSS","Typescript"],
    },
    {
        id: 4,
        title: "Resume Builder",
        desc: "A React & Typescript based  project and Orginization ",
        img: "/Capture4.jpg",
        tags: ["React","Next.js","CSS","Typescript"],
    },
    {
        id: 5,
        title: "Resume Builder",
        desc: "A React & Typescript based  project and Orginization ",
        img: "/Capture5.jpg",
        tags: ["React","Next.js","CSS","Typescript"],
    },
    {
        id: 6,
        title: "Resume Builder",
        desc: "A React & Typescript based  project and Orginization ",
        img: "/Capture6.jpg",
        tags: ["React","Next.js","CSS","Typescript"],
    }
]

const Projects = () => {
  return (
    <div id="Projects" className='container pt-32'>
        <Heading title="My Projects"/>
        <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-3 place-items-center">
            {data.map((el)=> (<Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            />))}
        </div>

    </div>
  )
}

export default Projects