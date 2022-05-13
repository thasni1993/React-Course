import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Video extends Component {
    render() {
        return (
            <div>
                <ReactPlayer url="https://www.youtube.com/watch?v=t0Q2otsqC4I" 
                controls
                volume={null}
                muted
                onReady= {() => console.log('onReady callback')}
                onStart={() => console.log('onStart callback')}
                onPlay={() => console.log('onPlay callback')}
                onPause={() => console.log('onPause callback')}
                onBuffer={() => console.log('onBuffer callback')}
                onEnded={() => console.log('onEnded callback')}/>
            </div>
        );
    }
}

export default Video;
