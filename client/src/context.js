import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch(action.type){
    case 'UPDATE_JOBS':
      return {
        ...state,
        jobs: action.payload
      };
      default:
        return state;
  }
}

export class Provider extends Component {
  state = {
    jobs: [],
    dispatch: action => this.setState(state => reducer(state, action))
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;