import React, { Component, PropTypes } from 'react'
import {
	Text, View, StyleSheet, Dimensions,Image,
	Modal, TouchableOpacity, Animated, ScrollView
} from 'react-native'

import styles, { btnStyle, sheetStyle, hairlineWidth } from './styles'


const TITLE_H 				= 40
const CANCEL_MARGIN  		= 6
const BUTTON_H 				= 50 + 10
const WARN_COLOR 			= '#ff3b30'


class ActionButton extends Component {
	constructor(props) {
		super(props)
		this.scrollEnabled = false
		this.translateY = this._calculateHeight(props)
		this.state = {
			visible: false,
			sheetAnim: new Animated.Value(this.translateY)
		}
		this._cancel = this._cancel.bind(this)
	}

	componentWillReceiveProps(nextProps) {
		this.translateY = this._calculateHeight(nextProps)
	}

	show() {
		this.setState({visible: true})
		this._showSheet();
	}

	hide(index) {
		this._hideSheet(() => {
			this.setState({visible: false})
			this.props.onPress(index)
		})
	}

	_cancel() {
		this.hide(-1);
	}

	_showSheet() {
		Animated.timing(this.state.sheetAnim, {
			toValue: 0,
			duration: 250
		}).start()
	}

	_hideSheet(callback) {
		Animated.timing(this.state.sheetAnim, {
			toValue: this.translateY,
			duration: 150
		}).start(callback || function() {})
	}

	_calculateHeight(props) {
		let count = props.options.length
		let height = BUTTON_H * count
        return height
	}

	render() {
		const { visible, sheetAnim } = this.state
		return (
			<Modal
				visible={visible}
				transparent={true}
				animationType="none"
				onRequestClose={this._cancel}
			>
				<View style={sheetStyle.wrapper}>
					<Text style={styles.overlay} onPress={this._cancel}></Text>
					<Animated.View
						style={[sheetStyle.bd, {height: this.translateY, transform: [{translateY: sheetAnim}]}]}
					>
						<ScrollView
							contentContainerStyle={sheetStyle.options}>
              <View style={[btnStyle.wrapper]}>
                <TouchableOpacity
                  underlayColor="#f4f4f4"
                  onPress={this.hide.bind(this, 0)}
                >
                  <Image
                    style={btnStyle.icon}
                    source={require('../images/订单@2x.png')}
                  />
                </TouchableOpacity>
              </View>
              <View style={[btnStyle.wrapper]}>
							  <TouchableOpacity
								  underlayColor="#f4f4f4"
								  onPress={this.hide.bind(this, 1)}
							  >
								  <Image
									  style={btnStyle.icon}
									  source={require('../images/红包@2x.png')}
								  />
							  </TouchableOpacity>
              </View>

              <View style={[btnStyle.wrapper]}>
							  <TouchableOpacity
								  underlayColor="#f4f4f4"
								  onPress={this.hide.bind(this, 2)}
							  >
								  <Image
									  style={btnStyle.icon}
									  source={require('../images/地址@2x.png')}
								  />
							  </TouchableOpacity>
              </View>
						</ScrollView>
					</Animated.View>
				</View>
			</Modal>
		)
	}
}

ActionButton.propTypes = {
	options: PropTypes.arrayOf((propVal, key, componentName, location, propFullName) => {
		if (typeof propVal[key] !== 'string' && !React.isValidElement(propVal[key])) {
			return new Error(
        'Invalid prop `' + propFullName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      )
		}
	}),
	tintColor: PropTypes.string,
	destructiveButtonIndex: PropTypes.number,
	onPress: PropTypes.func
}

ActionButton.defaultProps = {
	tintColor: '#007aff',
	onPress: () => {}
}

export default ActionButton
