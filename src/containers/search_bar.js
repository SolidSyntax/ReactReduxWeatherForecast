import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {searchTerm: ''};

        //This in onInputChange can change depending on who calls the function (see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/this)
        //By using 'bind' we can set a fixed value for the 'this' keyword (see https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/this#The_bind_method)
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({searchTerm: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();

        //Fetch weather
        this.props.fetchWeather(this.state.searchTerm);
        this.setState({searchTerm: ''});
    }


    render() {
        return (
            <form className="input-group"
                  onSubmit={this.onFormSubmit}>
                <input
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.searchTerm}
                    onChange={this.onInputChange}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather},dispatch)
}

export default connect (null,mapDispatchToProps)(SearchBar)