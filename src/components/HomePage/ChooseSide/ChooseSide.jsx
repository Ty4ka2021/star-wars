import { THEME_DARK, THEME_LIGHT, THEME_NEITRAL, useTheme } from '@context/ThemeProvider'
import cn from 'classnames'
import React from "react"
import s from './ChooseSide.module.css'
import imgDarkSide from './img/dark-side.jpg'
import imgFalcon from './img/falcon.jpg'
import imgLightSide from './img/light-side.jpg'


const ChooseSideItem = ({
	classes,
	theme,
	text,
	img,
}) => {
	const isTheme = useTheme()

	return (
		<div
			className={cn(s.item, classes)}
			onClick={() => isTheme.change(theme)}
		>
			<div className={s.item__header}>{text}</div>
			<img className={s.item__img} src={img} alt={text} />
		</div>
	)
}



const ChooseSide = () => {
	const elements = [
		{
			theme: THEME_LIGHT,
			text: "Light Side",
			img: imgLightSide,
			classes: s.item__light,
		},
		{
			theme: THEME_DARK,
			text: "Dark Side",
			img: imgDarkSide,
			classes: s.item__dark,
		},
		{
			theme: THEME_NEITRAL,
			text: "I'm Han Solo",
			img: imgFalcon,
			classes: s.item__neitral,
		},
	]

	return (
		<div className={s.container}>
			{elements.map(({ theme, text, img, classes }, index) => (
				<ChooseSideItem
					key={index}
					theme={theme}
					text={text}
					img={img}
					classes={classes}
				/>
			))}
		</div>
	)
}

export default ChooseSide