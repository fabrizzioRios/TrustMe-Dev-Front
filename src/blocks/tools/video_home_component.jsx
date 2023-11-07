import {DefaultPlayer as Video }from 'react-html5video'
import 'react-html5video/dist/styles.css';
import Video_T from '../../media/vid/TrustME2.mp4'
export function ReactVideoPage(){
    return (
        <Video autoPlay loop>
            <source src={Video_T} type={"video/webm"}/>
        </Video>
    )
}
