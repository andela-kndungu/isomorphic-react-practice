import React, { PropTypes } from 'react';

class MainView extedns React.Component {
  render() {
    return (
      <div id="mainView">
        <h1>To Do</h1>
        <hr />
        {this.props.children}
      </div>
    );
  }
}

MainView.propTypes = {
  children: PropTypes.object
};

export default MainView;

