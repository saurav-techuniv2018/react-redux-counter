import React from 'react';
import { PropTypes } from 'prop-types';

class ShowText extends React.Component {
  constructor(props) {
    super(props);

    ShowText.propTypes = {
      message: PropTypes.string.isRequired,
    };
  }

  render = () => (
    <span>{this.props.message}</span>
  );
}

export default ShowText;
