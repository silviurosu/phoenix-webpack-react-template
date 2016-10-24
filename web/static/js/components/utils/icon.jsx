import React from 'react';
import cx from 'classnames';

const propTypes = {
  name: React.PropTypes.string.isRequired,
};

class Icon extends React.Component {
  displayName() {
    return 'Icon';
  }
  componentDidMount() {
  }
  render() {
    const classNames = cx('fa', `fa-${this.props.name}`);
    return <i className={classNames}></i>;
  }
}

Icon.propTypes = propTypes;
export default Icon;
