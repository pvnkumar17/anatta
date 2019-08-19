import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import "./layout.css";


export class Layout extends PureComponent {
    state = {

    }
    render() {

        return (
        	<div className="layout">
        	   <div className="layout-container">
				    {this.props.children}
 			    </div>
			</div>
        );
    }

   
}

function mapStateToProps(state, ownProps){
   
    return {
           
    }

}

function mapDispatchToProps(dispatch) {
 
  return {

  }

}
 
export default connect(mapStateToProps,mapDispatchToProps)(Layout);


