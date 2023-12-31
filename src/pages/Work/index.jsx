import React from 'react'
import "./work.scss";

const Work = () => {

  const projects = [
    {
      image: "./assets/Frame 2.png",
      name: "Portfolio website",
      description: "My portfolio website as a frontend developer<span>. Here you can see all my projects and ideas coming true</span><span class='dot'>.</span>",
      topic: "Development",
      link: "",
      id: 1,
    },
    {
      image: "./assets/soon-image.png",
      name: "UIcode landing page",
      description: "A landing page for an eBook called UIcode <span>what the reason to this eBook is to call people to learn ui design on figma</span><span class='dot'>.</span>",
      topic: "Development",
      link: "#",
      id: 2,
    },
    {
      image: "./assets/soon-image.png",
      name: "Social media posts",
      description: "My Instagram account where i post programming <span>content and ui design tips for beginners, however it's in portuguese</span><span class='dot'>.</span>",
      topic: "Design & Content Creation",
      link: "https://www.instagram.com/andersonhsb7",
      id: 1,
    },
  ]

  return (
    <div className='work-div' id='work'>
      <h2>Selected <span>Works</span></h2>
      
      {projects.map((value, index) => (
        <div className={`work-div-flex ${value.id === 2 && "row-reverse"} hidden`} key={index}>
          <div className='image-loading'>
            <img src={value.image} alt={value.name} />
          </div>
          <div className='work-details'>
            <h4>{value.name}</h4>
            <p dangerouslySetInnerHTML={{ __html: value.description }}></p>
            <p className='text-small'>{value.topic}</p>
            <a target='blank' href={value.link}><p>View Work</p> <i className="fa-solid fa-chevron-right"></i></a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Work;