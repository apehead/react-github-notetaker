import React, { PropTypes } from 'react';
import Rebase from 're-base';

import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
import { getGithubInfo } from '../utils/helpers';

const base = Rebase.createClass({
  apiKey: 'AIzaSyAQgOBCgw0OPfqlfR_zZER-f_b2BPBwCTM',
  authDomain: 'github-note-taker-bc8e5.firebaseapp.com',
  databaseURL: 'https://github-note-taker-bc8e5.firebaseio.com',
  storageBucket: 'github-note-taker-bc8e5.appspot.com'
});

class Profile extends React.Component {

  constructor() {
    super();

    this.state = {
      notes: [],
      bio: {},
      repos: []
    };

    this.handleAddNote = this.handleAddNote.bind(this);
  }

  componentDidMount() {
    const { params: { username } } = this.props;

    this.init(username);
  }

  componentWillReceiveProps(nextProps) {
    const { params: { username } } = nextProps;

    base.removeBinding(this.ref);
    this.init(username);
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  init(username) {
    this.ref = base.bindToState(username, {
      context: this,
      asArray: true,
      state: 'notes'
    });

    getGithubInfo(username)
      .then(({ bio, repos }) => {
        this.setState({ bio, repos });
      })
      .catch(error => {
        console.warn('getGithubInfo', error);
        this.context.router.push('/');
      });
  }

  handleAddNote(newNote) {
    const { params: { username } } = this.props;

    base.post(username, {
      data: this.state.notes.concat([newNote])
    });
  }

  render() {
    const { params: { username } } = this.props;

    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes
            username={username}
            notes={this.state.notes}
            addNote={this.handleAddNote}
          />
        </div>
      </div>
    );
  }

}

Profile.contextTypes = {
  router: PropTypes.object.isRequired
};

Profile.propTypes = {
  params: PropTypes.shape({
    username: PropTypes.string.isRequired
  })
};

export default Profile;
