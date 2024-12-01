import React from 'react';
import skill1Image from '../assets/HTML.png';
import skill2Image from '../assets/CSS.png';

const SkillsPage = () => {
  const skills = [
    { id: 1, name: 'HTML', image: skill1Image },
    { id: 2, name: 'CSS', image: skill2Image },
  ];

  return (
    <section className="py-16">
      <h2 className="text-4xl text-center text-blue-500 mb-8">Skills</h2>
      <div className="flex justify-center gap-6">
        {skills.map((skill) => (
          <div key={skill.id} className="text-center">
            <img src={skill.image} alt={skill.name} className="w-20 mx-auto" />
            <p className="mt-2">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsPage;
