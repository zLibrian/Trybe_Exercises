import React from 'react';

class Image extends React.Component {
  render() {
    const { source: { images, title }, alt, className } = this.props;
    return (
      <section>
        {images.map((imageLink, index) => (
          <div>
          <img 
            src={ imageLink } 
            alt={ alt } 
            className={ className } 
            key={ index } 
          />
          <p>{ title }</p>
          </div>
          ))}
      </section>
    );
  }
}

export default Image;
