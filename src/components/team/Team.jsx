import React from 'react';
import './Team.css';
import TeamCard from '../teamCard/TeamCard';

const teamMembers = [
    {
        name: 'Ayesha Khan',
        role: 'Frontend Developer',
        image: '/images/ayesha.jpg',
        bio: 'Passionate about clean UI and React development.',
        linkedin: 'https://linkedin.com/in/ayeshakhan'
    },
    {
        name: 'Mohit Sharma',
        role: 'Backend Developer',
        image: '/images/mohit.jpg',
        bio: 'Specializes in Node.js and API design.',
        linkedin: 'https://linkedin.com/in/mohitsharma'
    },
    {
        name: 'Sara Patel',
        role: 'UI/UX Designer',
        image: '/images/sara.jpg',
        bio: 'Loves building beautiful and intuitive designs.',
        linkedin: 'https://linkedin.com/in/sarapatel'
    }
];

function Team() {
    return (
        <div className="teamSection" id="team">
            <h1 className="teamTitle">
                Our Teams
            </h1>
            <div className="teamLists">
                {
                    teamMembers.map((eachTeamInfo, index) => {
                        return <TeamCard key={index} eachTeamInfo={eachTeamInfo}/>
                    })
                }

              

            </div>
        </div>
    );
}

export default Team;
