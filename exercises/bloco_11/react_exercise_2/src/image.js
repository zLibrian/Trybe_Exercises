import React from 'react';

class Image extends React.Component {
  render() {
    const {source, alt, className} = this.props;
    return <img src={source} alt={alt} className={className} />;
  }
}

export default Image;