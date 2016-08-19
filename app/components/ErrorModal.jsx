var React = require('react');

var ErrorModal = react.createClass({
    render: function () {
        return (
            <div id="error-modal" className="reveal tiny text-center" data-reveal>
                <h4>Title</h4>
                <p>Error Message</p>
                <p>
                    <button className="button hollow" data-close>
                        Okay
                    </button>
                </p>
            </div>  
        );
    }
});

module.exports = ErrorModal;