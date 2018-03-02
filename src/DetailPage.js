import React, { Component } from 'react';
import { connect } from 'react-redux';

class DetailPage extends Component {
  render(){
    return (
      <div>detail</div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
});

const mapStateToProps = state => {
  const { search: { list } } = state;
  return {
    list
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);