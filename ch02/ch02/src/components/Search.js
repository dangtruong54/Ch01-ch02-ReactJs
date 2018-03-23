import React, { Component } from 'react';

class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            strSearch  : ''
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);// cần sự kiện change để có thể nhập dữ liệu vào input, nếu ko có input sẽ là read-only
        this.handleClear  = this.handleClear.bind(this);
    }

    handleSearch() {
        this.props.onClickGo(this.state.strSearch);
    }

    handleChange(event) {
        this.setState({strSearch : event.target.value});
    }

    handleClear() {       
        this.setState({strSearch : ''});
        this.props.onClickGo('');      
    }  

    render() {
        return ( 
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="input-group">
                    <input type="text" className="form-control" laceholder="Search for..." value={this.state.value} onChange={this.handleChange}/>
                    <span className="input-group-btn">
                        <button className="btn btn-info" type="button" onClick={this.handleSearch}>Go!</button>
                        <button className="btn btn-warning" type="button" onClick={this.handleClear}>Clear</button>
                    </span>
                </div>
            </div>
        );
    }
}

export default Search;