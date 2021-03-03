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
			bottom: '60px',
			width: '620px',
			transform: 'scale(-1, 1)',
			[from]: forward ? `${spring({
				from: 105,
				to: 60,
				frame,
				fps
			})}%` : `${spring({
				from: 60,
				to: 105,
				frame: frame - (durationInFrames - SLIDE_LENGTH),
				fps
			})}%`
		}}
		>
			<Img src={img} style={{maxWidth: '100%'}} />
		</div>
	);
};
