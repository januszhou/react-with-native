import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doSearch } from './epic';
import Button from './components/Button';
import Input from './components/Input';

class SearchPage extends Component {
  render(){
    return (
      <div>
        <Input/>
        <Button>Search</Button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  search: ({ name }) => dispatch(doSearch({ name }))
});

const mapStateToProps = state => {
  const { search: { list } } = state;
  return {
    list
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);