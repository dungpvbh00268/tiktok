import video1 from './videos/video-1.mp4';
import st from './videos/st.mp4';
import { useRef, forwardRef, useImperativeHandle } from 'react';
import './App.css'


function Video(prop, ref) {
    const videoRef = useRef()
    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()

        },
        pause() {
            videoRef.current.pause()
        },
        toggle() {
            videoRef.current[videoRef.current.paused ? 'play' : 'pause']()
        }
    }))

    return (
        <>
            <video
                onClick={prop.handleVideo}
                ref={videoRef}
                src={st}
                width={400}
                className='video'
            />
            {/* thêm thanh ngang để tua, âm lượng */}
            <div className='controls'>
                <input type='range' className='progress'
                    onChange={e => {
                        videoRef.current.currentTime = e.target.value
                    }}
                />
                <button onClick={() => videoRef.current.play()}>Play</button>
                <button onClick={() => videoRef.current.pause()}>Pause</button>
                <button className='toggle' onClick={() => videoRef.current.toggle()}>Toggle</button>
                <input type='range' className='volume' />
            </div>
        </>
    )
}

export default forwardRef(Video);