import React from 'react';
import './SectionGit.css'
import ReposList from '../Repositorio/ReposList';


function SectionGit(props) {
    return (
      <div>
        <ReposList users={props.users} />
      </div>
    )
}

export default SectionGit
