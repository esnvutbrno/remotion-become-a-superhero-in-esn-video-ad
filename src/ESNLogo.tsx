import {interpolate, Sequence, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {DATE_LENGTH, INTRO_LENGTH, SLIDE_LENGTH} from './Ad/config';
import logo from './assets/logo.png'

export const ESNLogo: React.FC<{

}> = () => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig();

	const fadingOut = frame >= (durationInFrames - SLIDE_LENGTH)
	const opacity = interpolate(
		frame,
		[5, durationInFrames - 5],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	return (
		<div style={{flex: 1, backgroundColor: 'white'}}>
				<div style={{
					position: 'absolute',
					top: '700px',
					padding: '100px',
					width: '100%',
					opacity,
				}}>
					<img src={logo} style={{
						maxWidth: '100%'
					}} />
				</div>
		</div>
	);
};
