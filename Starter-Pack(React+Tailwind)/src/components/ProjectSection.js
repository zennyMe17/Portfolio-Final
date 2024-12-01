import React from 'react';

const ProjectSection = () => {
  const projects = [
    { id: 1, title: 'Project One', image: '/assets/project1.png' },
    { id: 2, title: 'Project Two', image: '/assets/project2.png' },
    { id: 3, title: 'Project Three', image: '/assets/project3.png' },
    { id: 4, title: 'Project Four', image: '/assets/project4.png' },
  ];

  return (
    <section id="projects" className="bg-gray-100 py-16">
      <h2 className="text-center text-6xl text-red-500 mb-12">Projects</h2>
      <div className="flex flex-wrap justify-center gap-16">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-96 h-96 bg-cover bg-center relative shadow-lg"
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white text-2xl font-bold opacity-0 hover:opacity-100 transition">
              {project.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
