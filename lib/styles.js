import { StyleSheet, Dimensions, StatusBar } from 'react-native'

export const hairlineWidth = StyleSheet.hairlineWidth

export default StyleSheet.create({
	overlay: {
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		opacity: 0.4,
		backgroundColor: '#000'
	}
})

export const sheetStyle = StyleSheet.create({
	wrapper: {
		flex: 1,
		flexDirection: 'row',
	},
	bd: {
		flex: 1,
		alignSelf: 'flex-end',
		alignItems: 'flex-end',
		marginRight: 10,
		marginBottom: 100
	},
	title: {
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff'
	},
	titleText: {
		color: '#8f8f8f',
		fontSize: 12
	}
})

export const btnStyle = StyleSheet.create({
	wrapper: {
		width: 55,
		height: 45,
		alignItems: 'center',
		marginTop: 10,
		justifyContent: 'center',
		backgroundColor: 'rgba(0,0,0,1)',
		borderRadius: 5,
		opacity: 0.7
	},
	title: {
		fontSize: 18
	},
	icon: {
		width: 20,
		height: 22
	}
})





