import React, { Component } from 'react';
import FileSaver from 'file-saver';
import store from "../Store"

class Submit extends Component{
    save = () => {
        var FileSaver = require('file-saver');
        let d = store.getState();
        let content = JSON.stringify(d);
        let blob = new Blob([content], {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(blob, "test.txt")
      }
    
    render(){
        return(
            <div>
                <h1>Click save to save results, Thank you :)</h1>
                <button onClick = { this.save } > save </button>  
            </div>
            
        );
    }
}

export default Submit;