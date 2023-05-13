import React from "react"
import s from "./UIButton.module.css"
import cn from 'classnames'

const UIButton = ({ text, onClick, disabled, theme = 'dark' }) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={cn(s.button, s[theme])}
		>
			{text}
		</button>
	)
}

export default UIButton