import cn from 'classnames'
import React, { useEffect, useRef } from "react"
import s from "./UIVideo.module.css"

const UIVideo = ({ src, classes, playbackRate = 1.0 }) => {

	const videoRef = useRef(null)

	useEffect(() => {
		videoRef.current.playbackRate = playbackRate
	}, [])




	return (
		<video
			loop
			autoPlay
			muted
			className={cn(s.video, classes)}
			ref={videoRef}
		>
			<source src={src} />
		</video >
	)
}

export default UIVideo