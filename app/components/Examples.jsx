var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">Example</h1>
            <p>Here are a few locations to try out:</p>
            <ol>
                
                <li>
                    <Link to='/?location=Austin'>Austin, TX</Link>
                </li>
                <li>
                    <Link to='/?location=Dallas'>Dallas, TX</Link>
                </li>
                <li>
                    <Link to='/?location=Philadelphia'>Philadelphia, PA</Link>
                </li>
                <li>
                    <Link to='/?location=New York City'>New York City, NY</Link>
                </li>
                <li>
                    <Link to='/?location=Seattle'>Seattle, WA</Link>
                </li>
            </ol>
        </div>
    )
};

module.exports = Examples;

