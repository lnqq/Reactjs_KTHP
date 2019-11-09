import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';


class search extends Component {

    constructor(props){
        super(props);
        this.state = {
            keyword : ''
        }
    }

    // onChange = (event) => {
    //     var target = event.target;
    //     var name = target.name;
    //     var value = target.value;
    //     this.setState({
    //         [name] : value
    //     });
    // }

    onHandleChange = (event) => {
        this.setState({
            keyword : event.target.value
        });
    }
    
    onSearch = () => {
        this.props.onSearch(this.state.keyword); // dispath searchTask
    }

    render() {
        var {keyword} = this.state;
      return (
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">            
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto col-md-2">                  
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Bộ lọc
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" >Bộ lọc</a>
                        <a className="dropdown-item" >Tất cả</a>
                        <a className="dropdown-item" >Máy Scan Fujits</a>
                        <a className="dropdown-item" >Máy Scan Plustek</a>
                        <a className="dropdown-item" >Máy Scan HP</a>
                        <a className="dropdown-item" >Máy Scan Canon</a>
                        <a className="dropdown-item" >Máy Scan Panasonic</a>
                        <a className="dropdown-item" >Máy Scan Kodak</a>
                        <a className="dropdown-item" >Máy Scan Epson</a>                        
                        </div>
                    </li>                
                    </ul>
                    <form className="form-inline my-2 my-lg-0 col-md-10">
                    <input 
                        className="form-control mr-sm-8 col-md-10" 
                        type="search" 
                        placeholder="Tìm kiếm sản phẩm" 
                        aria-label="Search" 
                        name="keyword"
                        value={keyword}
                        onChange={this.onHandleChange}
                        
                        />
                    <button 
                        className="btn btn-outline-success my-2 my-sm-0 col-md-2" 
                        type="submit"
                        onClick={ this.onSearch }
                        >
                            Tìm kiếm
                        </button>
                    </form>
                </div>
            </nav>
      </div>
      );
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSearch : (keyword) => {
            dispatch(actions.searchTask(keyword));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(search);
