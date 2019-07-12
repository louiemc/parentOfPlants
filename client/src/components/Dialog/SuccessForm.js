import React, {Component} from "react";

class SuccessForm extends Component {
    render() {
        const { handleClose } = this.props;
   
        
        return(
            <div className="dialogForm">
                {this.props.changeLogStatus()}
                <h6>ACCOUNT CREATED SUCCESSFULLY</h6>
                <button className="btn btn-outline-secondary" onClick={handleClose}>Close</button>
            </div>
        )
}
}

export default SuccessForm;