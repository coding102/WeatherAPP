var React = require('react');

var WeatherMessage = React.createClass({
    render: function () {
        return (
            <h3>It is {this.state} in Philadelphia</h3>
        );
    }
});

module.exports = WeatherMessage;