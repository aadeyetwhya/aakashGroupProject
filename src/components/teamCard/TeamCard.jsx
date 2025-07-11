import React from 'react'

function TeamCard({eachTeamInfo}) {
  return (
    <div className="teamCard" >
                            <div className="teamImage">
                               <img src={ eachTeamInfo.image} alt="" />
                            </div>
                            <div className="teamName">
                               { eachTeamInfo?.name}
                            </div>
                            <div className="teamDegination">
                               { eachTeamInfo?.role}
                            </div>
                            <div className="teamDescription">
                               { eachTeamInfo?.bio}
                            </div>
                            <div className="teamLinks">
                                <a href={eachTeamInfo?.linkedin} target="_blank">LinkedIn</a>
                            </div>
                        </div>
  )
}

export default TeamCard