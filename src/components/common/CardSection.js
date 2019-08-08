import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSection = (props) => {
	const { containerStyle } = styles;

	return (
		<View style={[containerStyle, props.style]}>{props.children}</View>
	);
};

const styles = StyleSheet.create({
	containerStyle: {
		paddingVertical: 5,
		justifyContent: 'flex-start',
		flexDirection: 'row',
		position: 'relative'
	}
})

export { CardSection };