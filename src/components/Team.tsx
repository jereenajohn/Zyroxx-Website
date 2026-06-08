import React from 'react';
// import { motion } from 'framer-motion';
// import { Cpu, Layout, Globe, Command } from 'lucide-react';

// interface CustomIconProps extends React.SVGProps<SVGSVGElement> {
//   size?: number;
// }

// const Linkedin = ({ size = 24, ...props }: CustomIconProps) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
//     <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
//     <rect width="4" height="12" x="2" y="9" />
//     <circle cx="4" cy="4" r="2" />
//   </svg>
// );

// const Github = ({ size = 24, ...props }: CustomIconProps) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
//     <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
//     <path d="M9 18c-4.51 2-5-2-7-2" />
//   </svg>
// );

// const Twitter = ({ size = 24, ...props }: CustomIconProps) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
//     <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
//   </svg>
// );

// interface TeamMember {
//   name: string;
//   role: string;
//   skills: string[];
//   initials: string;
//   icon: React.ReactNode;
//   linkedin: string;
//   github: string;
//   twitter: string;
//   accent: string;
// }

export const Team: React.FC = () => {
  // const members: TeamMember[] = [
  //   {
  //     name: 'Alex Sterling',
  //     role: 'CEO & Principal Architect',
  //     skills: ['Systems Design', 'Next.js', 'Go', 'AWS'],
  //     initials: 'AS',
  //     icon: <Command size={20} className="color-cyan" />,
  //     linkedin: '#',
  //     github: '#',
  //     twitter: '#',
  //     accent: 'rgba(0, 240, 255, 0.2)'
  //   },
  //   {
  //     name: 'David Kovic',
  //     role: 'Lead Mobile Architect',
  //     skills: ['Flutter', 'Dart', 'SwiftUI', 'Kotlin'],
  //     initials: 'DK',
  //     icon: <Cpu size={20} className="color-cyan" />,
  //     linkedin: '#',
  //     github: '#',
  //     twitter: '#',
  //     accent: 'rgba(59, 130, 246, 0.2)'
  //   },
  //   {
  //     name: 'Sophia Mercer',
  //     role: 'Principal UI/UX Designer',
  //     skills: ['Design Systems', 'Figma', 'Prototyping', 'UX Research'],
  //     initials: 'SM',
  //     icon: <Layout size={20} className="color-cyan" />,
  //     linkedin: '#',
  //     github: '#',
  //     twitter: '#',
  //     accent: 'rgba(139, 92, 246, 0.2)'
  //   },
  //   {
  //     name: 'Niko Bellic',
  //     role: 'Lead Backend Engineer',
  //     skills: ['Node.js', 'Django', 'PostgreSQL', 'Docker'],
  //     initials: 'NB',
  //     icon: <Globe size={20} className="color-cyan" />,
  //     linkedin: '#',
  //     github: '#',
  //     twitter: '#',
  //     accent: 'rgba(0, 240, 255, 0.2)'
  //   }
  // ];

  return null;
  // return (
  //   <section className="team-section">
  //     <div className="ambient-glow" style={{ bottom: '-5%', left: '10%' }}></div>
  // 
  //     <div className="container">
  //       <div className="section-header">
  //         <span className="section-subtitle">Our Team</span>
  //         <h2 className="section-title gradient-text">Meet Our Innovators</h2>
  //         <p className="section-description">
  //           A small team of senior engineers and creatives who love building clean, 
  //           efficient software products.
  //         </p>
  //       </div>
  // 
  //       <div className="team-grid">
  //         {members.map((member, idx) => (
  //           <motion.div
  //             key={idx}
  //             initial={{ opacity: 0, y: 30 }}
  //             whileInView={{ opacity: 1, y: 0 }}
  //             viewport={{ once: true }}
  //             transition={{ duration: 0.5, delay: idx * 0.05 }}
  //             whileHover={{ y: -8 }}
  //             className="team-card glass-panel"
  //           >
  //             <div 
  //               className="team-avatar-area"
  //               style={{ background: `radial-gradient(circle, ${member.accent} 0%, rgba(3, 7, 18, 0.6) 70%)` }}
  //             >
  //               <div className="avatar-shield">
  //                 <span>{member.initials}</span>
  //               </div>
  //               
  //               {/* Tech Symbol Badge */}
  //               <div className="avatar-role-icon">{member.icon}</div>
  //             </div>
  // 
  //             <div className="team-info">
  //               <h3>{member.name}</h3>
  //               <p className="team-role">{member.role}</p>
  //               
  //               <div className="team-skills">
  //                 {member.skills.map((s) => (
  //                   <span key={s} className="team-skill-tag">{s}</span>
  //                 ))}
  //               </div>
  // 
  //               <div className="team-social-links">
  //                 <a href={member.linkedin} aria-label={`${member.name} LinkedIn`}>
  //                   <Linkedin size={16} />
  //                 </a>
  //                 <a href={member.github} aria-label={`${member.name} GitHub`}>
  //                   <Github size={16} />
  //                 </a>
  //                 <a href={member.twitter} aria-label={`${member.name} Twitter`}>
  //                   <Twitter size={16} />
  //                 </a>
  //               </div>
  //             </div>
  //           </motion.div>
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );
};

export default Team;
