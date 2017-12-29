import React from 'react';

class Layout extends React.Component {
  render() {
    const { location } = this.props;
    console.log(location.pathname);
    return (
      <div className="layout">
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
