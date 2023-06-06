import cn from 'classnames'
import React from "react"
import s from "./UIInput.module.css"
import icon from './img/cancel.svg'

const UIInput = ({
	value,
	handleInputChange,
	placeholder,
	classes
}) => {
	return (
		<div className={cn(s.wrapper__input, classes)}>
			<input
				type="text"
				value={value}
				onChange={(e) => handleInputChange(e.target.value)}
				placeholder={placeholder}
				className={s.input}
			/>
			<img
				onClick={() => {
					value && handleInputChange('')
				}}
				src={icon}
				className={cn(s.clear, !value && s.clear__disabled)}
				alt="Clear" />
		</div>

	)
}

export default UIInput