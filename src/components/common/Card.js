import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {
	const { containerStyle } = styles;
	return (
		<View style={[containerStyle, props.style]}>
			{props.children}
		</View>
	);
};

const styles = StyleSheet.create({
	containerStyle: {
		//borderWidth: 1,
		//borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		//elevation: 1,
		marginLeft: 37,
		marginRight: 37,
		marginTop: 10
	}
})

export { Card };