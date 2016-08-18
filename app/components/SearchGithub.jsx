import React, { PropTypes } from 'react';

class SearchGithub extends React.Component {

  constructor() {
    super();

    this.getRef = this.getRef.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getRef(ref) {
    this.usernameRef = ref;
  }

  handleSubmit(e) {
    e.preventDefault();
    const username = this.usernameRef.value;

    if (username) {
      this.usernameRef.value = '';
      this.context.router.push(`/profile/${username}`);
    }
  }

  render() {
    return (
      <div className="col-sm-12">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group col-sm-7">
            <input
              type="text"
              className="form-control"
              ref={this.getRef}
            />
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-primary">Search GitHub</button>
          </div>
        </form>
      </div>
    );
  }

}

SearchGithub.contextTypes = {
  router: PropTypes.object.isRequired
};

export default SearchGithub;
