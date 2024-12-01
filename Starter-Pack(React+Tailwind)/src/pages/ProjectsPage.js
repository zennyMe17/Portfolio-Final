import React from 'react';
import project1Image from '../assets/Project1.png';
import project2Image from '../assets/Project2.png';
import project3Image from '../assets/Project3.png';
import project4Image from '../assets/Project4.png';

const ProjectsPage = () => {
  const projects = [
    { id: 1, title: 'Project One', image: project1Image },
    { id: 2, title: 'Project Two', image: project2Image },
    { id: 3, title: 'Project Three', image: project3Image },
    { id: 4, title: 'Project Four', image: project4Image },
  ];

  return (
    <section className="py-16">
      <h2 className="text-4xl text-center text-blue-500 mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="relative group">
            <img src={project.image} alt={project.title} className="rounded shadow-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition">
              <p className="text-white text-center mt-20">{project.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
