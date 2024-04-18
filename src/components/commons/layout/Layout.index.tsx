import { useTheme } from 'next-themes';
import { UilMoon, UilSun } from '@iconscout/react-unicons';
import { Container } from '../../../commons/globalStyles';
import { Contents, LayoutWrapper, ThemeBtn } from './Layout.styles';
import MenuBar from './menuBar/menuBar';
import useScrollDirection from '../../../hooks/useScrollDirection';
import { useMemo } from 'react';
const Layout = props => {
	const { theme, setTheme } = useTheme();
	const scrollDirection = useScrollDirection();
	const onClickChangeTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	};
	const getScroll = useMemo(() => {
		return scrollDirection;
	}, [scrollDirection]);
	return (
		<>
			<MenuBar scrollDirection={getScroll} />
			<Container>
				<LayoutWrapper>
					<Contents className="container">{props.children}</Contents>
					<ThemeBtn theme={theme} onClick={onClickChangeTheme}>
						{theme === 'dark' ? <UilSun /> : <UilMoon />}
					</ThemeBtn>
				</LayoutWrapper>
			</Container>
		</>
	);
};
export default Layout;
