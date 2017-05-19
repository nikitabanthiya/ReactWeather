var React = require('react');

var About = (props)=> {
  return (
    <div>
      <h1 classname="text-venter">About</h1>
      <p>This is weather Application,built on react .Webpack Developer</p>
      <p>Here are some tools I used</p>
      <ul>
      <li><a href="https://facebook.github.io/react">React</a>Jabascript framework</li>
      </ul>
      <li><a href="http://openweathermap.org">Open weather Map</a>Open weather Map to search for weather data by city name.</li>
    </div>
  );
}
module.exports = About;
