import {interpolate, Sequence, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {DATE_LENGTH, INTRO_LENGTH, SLIDE_LENGTH} from './Ad/config';

export const DateInfo: React.FC<{

}> = () => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig();

	const fadingOut = frame >= (durationInFrames - SLIDE_LENGTH)

	const move = interpolate(
		frame,
		[0, durationInFrames],
		[0, 30],
	)

	return (
		<div style={{flex: 1, backgroundColor: 'white'}}>
				<h1 style={{
						fontSize: 140,
						position: 'absolute',
						width: '100%',
						top: '600px',
						textAlign: 'center',
						fontFamily: 'Bowlby One SC',
						fontWeight: 200,
						color: 'white',
						textShadow: '0 0 20px black',
				}}
				>
					<span style={{
						// color: '#f7ec32-',
						// textShadow: '0 8px 0 #89201f'
					}}>ČTVRTEK 20:00</span> <br />
					LINK V BIU
				</h1>
		</div>
	);
};
