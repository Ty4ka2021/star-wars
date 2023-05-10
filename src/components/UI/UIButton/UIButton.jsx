import React from "react"
import s from "./UIButton.module.css"

const UIButton = ({ text, onClick, disabled }) => {
	return (
		<button
			onClick={onClick}
			className={s.button}
			disabled={disabled}
		>
			{text}
		</button>
	)
}

export default UIButton