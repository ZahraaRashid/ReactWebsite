import React from 'react';
import './projects.css';

export default function Projects() {
  const projectsData = [
    {
      title: 'ReadSmart Learning Modules',
      description: 'Empower educators with a comprehensive set of interactive learning modules that utilize our websites texts to develop students reading skills. From vocabulary building to critical analysis, these modules offer a structured approach to enhancing comprehension in classrooms.',
      imageUrl: '/images/project1.jpg',
    },
    {
      title: 'ReadWell Book Club',
      description: 'Create an online book club that leverages our platform to bring readers together. Participants can access a curated selection of texts, engage in discussions, and deepen their understanding of literature. This project fosters a sense of community while improving reading abilities.',
      imageUrl: '/images/project2.jpg',
    },
    {
      title: 'ReadEase Language Learning App',
      description: 'Extend our platforms impact globally by developing a language learning app. Users can choose texts tailored to their language proficiency, making reading an enjoyable way to learn and practice languages. The app offers an immersive experience that enhances both reading and language skills.',
      imageUrl: '/images/project3.jpg',
    },
    {
      title: 'ReadQuest Gamified Challenges',
      description: 'Gamify the reading experience by introducing challenges and quests on our platform. Users can embark on reading adventures, complete tasks, and earn rewards. This project adds an element of fun and competition, motivating users to read more and improve their comprehension abilities.',
      imageUrl: '/images/project4.jpg',
    },
    // Add more project objects here
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-heading">Projects</h1>
      <div className="projects-list">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

