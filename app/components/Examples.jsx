var React = require('react');
var {Link} =require('react-router')
var Examples = (props) =>{
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are few example of locaton to try out !!</p>
        <ol>
          <li>
            <Link to='/?location=India'>India,</Link>
          </li>
          <li>
          <Link to='/?location=Rio'>Rio,Brazil</Link>

          </li>
        </ol>

    </div>
  );
}

module.exports = Examples;
