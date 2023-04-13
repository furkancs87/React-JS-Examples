import React, {Component} from "react";

import Dropzone from 'react-dropzone';

class Hero extends Component
{
    render() {
        return(
            <div>
                <h1>Drop and Crop</h1>
                <Dropzone>Drop file here</Dropzone>
            </div>
        )
    }
}

export default Hero;