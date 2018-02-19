import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ShowText from '../show-text';
import { increment, decrement } from '../../redux/actions';

class App extends React.Component {
  static mapStateToProps = state => ({
    count: state.counter.count,
  });

  static mapDispatchToProps = dispatch => ({
    increment: () => { dispatch(increment()); },
    decrement: () => { dispatch(decrement()); },
  });

  constructor(props) {
    super(props);

    App.propTypes = {
      count: PropTypes.number.isRequired,
      increment: PropTypes.func.isRequired,
      decrement: PropTypes.func.isRequired,
    };
  }

  render = () => (
    <div>
      <div>
        Count is: <ShowText message={this.props.count.toString()} />
      </div>
      <button
        onClick={() => this.props.increment()}
      >
        Increment
      </button>
      <button
        onClick={() => this.props.decrement()}
      >
        Decrement
      </button>
    </div>
  );
}

export default connect(App.mapStateToProps, App.mapDispatchToProps)(App);
