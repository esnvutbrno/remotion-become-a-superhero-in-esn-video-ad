import {Img, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import Panda from './../assets/panda.png';
import Man from './../assets/man.png';
import Woman from './../assets/woman.png';
import {SLIDE_LENGTH} from './config';

export const Superhero: React.FC<{
	man: boolean;
}> = ({man}) => {
	const {durationInFrames, fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const forward = frame <= (durationInFrames - SLIDE_LENGTH);

	const from = man ? 'right' : 'left';
	const img = man ? Man : Woman;
	return (
		<div style={{
			position: 'absolute',
			width: '620px',
			transform: 'scale(-1, 1)',
			[from]: forward ? `${spring({
				from: 105,
				to: 60,
				frame,
				fps,
				config: {mass: .75}
			})}%` : `${spring({
				from: 60,
				to: 105,
				frame: frame - (durationInFrames - SLIDE_LENGTH),
				fps,
				config: {mass: .75}
			})}%`,
			bottom: forward ? `${spring({
				from: -10,
				to: 6.5,
				frame,
				fps,
				config: {mass: .75}
			})}%` : `${spring({
				from: 6.5,
				to: -10,
				frame: frame - (durationInFrames - SLIDE_LENGTH),
				fps,
				config: {mass: .75}
			})}%`,
		}}
		>
			<Img src={img} style={{maxWidth: '100%'}} />
		</div>
	);
};
