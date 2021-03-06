import React, { PropTypes } from 'react';

const Repos = props => {
  const repos = props.repos.map((repo, index) => (
    <li className="list-group-item" key={index}>
      {repo.html_url &&
        <h4>
          <a href={repo.html_url} target="_blank" rel="noreferrer noopener">{repo.name}</a>
        </h4>
      }
      {repo.description && <p>{repo.description}</p>}
    </li>
  ));

  return (
    <div>
      <h3>User Repos</h3>
      <ul className="list-group">
        {repos}
      </ul>
    </div>
  );
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired
};

export default Repos;
