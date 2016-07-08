import React, { PropTypes } from 'react';

const MainView = (props) => {
  return (
    <div id="mainView">
      <h1>To Do</h1>
      <hr />
      {props.children}
    </div>
  );
};

MainView.propTypes = {
  children: PropTypes.object,
};

export default MainView;

