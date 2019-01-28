import React from 'react'

class PopUp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let boxClass = ["overPopUp"];
        if(this.props.isOpen) {
            boxClass.push('open');
        }
        return(
            <div className={boxClass.join(' ')}/>
        );
    }
}

export default PopUp;