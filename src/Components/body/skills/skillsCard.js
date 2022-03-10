import React from 'react';
import './skillsCard.css';

const SkillCard = ({item}) => {
  return (
    <div className="skill-card">
      <div className="skill-icon">{item.icon}</div>
      <label className="skill-name">{item.name}</label>
    </div>
  );
}

export default SkillCard
