import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import zip from 'lodash/array/zip';

class Page1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Page1
      </div>
    );
  }
}

function mapStateToProps(state) {
  //const { param1 } = state.router.params;

  return {
  };
}

export default connect(mapStateToProps, {
})(Page1);