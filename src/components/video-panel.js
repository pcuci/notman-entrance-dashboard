import React from 'react';

export default function () {
    var url='https://www.youtube.com/embed/videoseries?list=PLB_zXfvmsSV3GcUfZSIOL0wcCoQgBy_0w&autoplay=1&loop=1';
    var width='660';
    var height='375';
    return <div className="VideoPanel">
              <iframe width={width} height={height} src={url} frameborder="0"></iframe>
           </div>;

}
