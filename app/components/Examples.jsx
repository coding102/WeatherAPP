var React = require('react');
var {Link} = require('react-router');

// var Examples = React.createClass({
//     render: function() {
//         return (
//             <h3>Examples Component</h3>
//         );
//     }
// });

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center">Example</h1>
            <p>Here are a few locations to try out:</p>
            <ol>
                <li>
                    <Link to='/?location=Philadelphia'>Princeton, NJ</Link>
                </li>
                <li>
                    <Link to='/?location=Austin'>Austin, TX</Link>
                </li>
            </ol>
        </div>
    )
};

module.exports = Examples;

