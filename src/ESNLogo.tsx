import {Img, interpolate, Sequence, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {DATE_LENGTH, INTRO_LENGTH, SLIDE_LENGTH, TEXT_SPRING_CONFIG} from './Ad/config';
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
					padding: '200px',
					width: '100%',
					textAlign: 'center',
					transform: fadingOut ? 'initial' : `scale(${spring({
						fps,
						frame: fadingOut ? durationInFrames - frame : frame,
						config: TEXT_SPRING_CONFIG,
					})})`
				}}>
					<Img src={logo} style={{
						maxWidth: '100%'
					}} />
				</div>
		</div>
	);
};
