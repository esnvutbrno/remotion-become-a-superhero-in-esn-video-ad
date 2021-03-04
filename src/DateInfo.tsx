import {interpolate, Sequence, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {DATE_LENGTH, INTRO_LENGTH, SLIDE_LENGTH, TEXT_SPRING_CONFIG} from './Ad/config';

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
						fontSize: 160,
						position: 'absolute',
						width: '100%',
						top: '650px',
						textAlign: 'center',
						fontFamily: 'Bowlby One SC',
						fontWeight: 200,
						color: 'white',
						textShadow: '0 0 20px black',
						transform: `scale(${spring({
							fps,
							frame: fadingOut ? durationInFrames - frame : frame,
							config: TEXT_SPRING_CONFIG,
						})})`,
						display: 'inline-block',
				}}
				>
					<span style={{
						color: '#f7ec32',
						textShadow: '0 0 20px #89201f'
					}}>ČTVRTEK 20:00</span> <br />
					<span style={{fontSize: 100}}>link v popisku</span>
				</h1>
		</div>
	);
};
