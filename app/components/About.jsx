var React = require('react');

var About = (props)=> {
  return (
    <div>
      <h2>About Component</h2>
      {props.children}
    </div>
  );
}
module.exports = About;
