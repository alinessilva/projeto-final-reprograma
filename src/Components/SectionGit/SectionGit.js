import React from 'react';
import ReposList from '../ReposList/ReposList';
import './SectionGit.css'


function SectionGit(props) {
    return (
      <div className="">
        <ReposList users={props.users} />
      </div>
    )
}

export default SectionGit
