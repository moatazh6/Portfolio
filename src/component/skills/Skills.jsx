import Marquee from "react-fast-marquee";
import html from '../../assets/html.png';
import css from '../../assets/css3.png';
import js from '../../assets/javascript.webp';
import figma from '../../assets/figma.png';
import react from '../../assets/react.png';
import tailwindcss from '../../assets/tailwindcss.png';
import bootstrap from '../../assets/bootstrap5.png';
import next from '../../assets/Next.png';
import scss from '../../assets/sass.webp';
import git from '../../assets/git.png';
import github from '../../assets/github.png';
import redux from '../../assets/redux.png';
import reactQuery from '../../assets/react-query.png';
import jquery from '../../assets/jquery.svg';
import npm from '../../assets/npm.png';
import typescript from '../../assets/typescript.png'
import './Skills.css';

export default function SkillsMarquee() {
  const icons = [
    { img: figma, color: '#10b981', disc: 'Figma' },       
    { img: html, color: '#f97316', disc: 'HTML' },        
    { img: css, color: '#0ea5e9', disc: 'CSS' },         
    { img: js, color: '#eab308', disc: 'JavaScript' },          
    { img: react, color: '#61dafb',disc: 'React.js' },       
    { img: tailwindcss, color: '#38bdf8', disc: 'TailwindCSS' }, 
    { img: bootstrap, color: '#7c3aed', disc: 'Bootstrap' },   
    { img: next, color: '#000', disc: 'Next.js' },           
    { img: scss, color: '#ec4899', disc: 'SCSS' },        
    { img: git, color: '#f97316', disc: 'Git' },         
    { img: github, color: '#6b7280', disc: 'GitHub' },    
    {img: redux, color: '#6b21a8', disc: 'Redux'},  
    {img: reactQuery, color: '#f43f5e', disc: 'react-query'},  
    {img: jquery, color: '#0769ad', disc: 'Jquery'},
    {img: npm, color: '#cb3837', disc: 'npm'},
    {img: typescript, color: '#3178c6', disc: 'Typescript'},
  ];

  return (
    <section className="py-10" id="skills">
      <header className="mb-8">
        <h1>My <span>Skills</span></h1>
      </header>
      <Marquee speed={120} pauseOnHover={false} gradient={true}>
        {icons.map((item, index) => (
          <div
            key={index}
            className="mx-6 bg-white p-4 rounded-xl shadow-md hover:scale-105 duration-300 flex flex-col items-center"
            style={{ border: `3px solid ${item.color}` }}
          >
            <img src={item.img} alt="tech" className="h-16 w-16 object-contain" />
            <h6 className="text-lg font-semibold mt-2" style={{ color: item.color }}>{item.disc}</h6>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
