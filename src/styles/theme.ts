// import { extendTheme, ThemeConfig } from '@chakra-ui/react';

// const config: ThemeConfig = {
// 	initialColorMode: 'dark',
// 	useSystemColorMode: false,
// };

// const theme = extendTheme({ config });

// export default theme;

import { extendTheme } from '@chakra-ui/react';
import type { Styles } from '@chakra-ui/theme-tools';
import { mode } from '@chakra-ui/theme-tools';

// setup light/dark mode global defaults
const styles: Styles = {
	global: props => ({
		body: {
			color: mode('gray.800', 'whiteAlpha.900')(props),
			bg: mode('white', 'black')(props),
		},
	}),
};

export const theme = extendTheme({
	styles,
});
