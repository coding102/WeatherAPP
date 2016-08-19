var React = require('react');

// var About = React.createClass({
//     render: function() {
//         return (
//             <h3>About Component</h3>
//         );
//     }
// });

var About = (prop) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>This is a React web application featuring React JS, React-Router, Webpack, Babel, Foundation, and the OpenWeatherMap API</p>
            <p>
                Credits:
            </p>

            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a>
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather Map</a>
                </li>
                <li>
                    <a href="http://foundation.zurb.com/">Foundation</a>
                </li>
            </ul>
        </div>
    )
};

module.exports = About;

