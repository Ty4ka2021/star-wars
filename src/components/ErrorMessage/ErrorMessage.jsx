import React from 'react'
import UIVideo from '../UI/UIVideo/UIVideo'
import s from './ErrorMessage.module.css'
import video from './video/han-solo.mp4'

const ErrorMessage = () => {
	return (
		<>
			<p className={s.text}>
				The dark side of the force has won. <br />
				We cannot display data. <br />
				Come back when we fix everything
			</p>
			<UIVideo src={video} classes={s.video} playbackRate={1} />
		</>
	)
}

export default ErrorMessage