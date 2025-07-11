import React from 'react';
import './Team.css';
import TeamCard from '../teamCard/TeamCard';

const teamMembers = [
    {
        name: 'Ram Shankar',
        role: 'Frontend Developer',
        image: 'https://png.pngtree.com/png-clipart/20220226/ourmid/pngtree-cartoon-boy-s-formal-blue-background-certificate-photo-png-image_4438531.png',
        bio: 'Passionate about clean UI and React development.',
        linkedin: 'https://linkedin.com/in/ayeshakhan'
    },
    {
        name: 'Himanshu Sharma',
        role: 'Backend Developer',
                image: 'https://img.freepik.com/premium-vector/cartoon-character-features-young-man-smiling-wearing-blue-shirt-against-solid-background-select-customizable-cartoon-illustration_538213-159086.jpg',

        bio: 'Specializes in Node.js and API design.',
        linkedin: 'https://linkedin.com/in/mohitsharma'
    },
    {
        name: 'Sita Neupane',
        role: 'Full Stack Developer',
                image: 'https://png.pngtree.com/png-clipart/20201224/ourmid/pngtree-id-photo-cartoon-character-girl-hand-painted-red-background-id-photo-png-image_2604919.jpg',

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
