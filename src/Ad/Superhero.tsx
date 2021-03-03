import {Img, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import panda from './../assets/panda.png';
import {SLIDE_LENGTH} from './config';

export const Superhero: React.FC<{
	man: boolean;
}> = ({man}) => {
	const {durationInFrames, fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const forward = frame <= (durationInFrames - SLIDE_LENGTH);

	const from = man ? 'right' : 'left';
	return (
		<div style={{
			position: 'absolute',
			bottom: '5vh',
			width: '20vw',
			[from]: forward ? `${spring({
				from: 105,
				to: 70,
				frame,
				fps,
			})}%` : `${spring({
				from: 70,
				to: 105,
				frame: frame - (durationInFrames - SLIDE_LENGTH),
				fps,
			})}%`
		}}
		>
			<Img src={panda} style={{maxWidth: '100%'}}/>
		</div>
	);
};
