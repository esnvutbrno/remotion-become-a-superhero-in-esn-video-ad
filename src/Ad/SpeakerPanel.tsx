import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {SLIDE_LENGTH} from './config';

export const SpeakerPanel: React.FC<{
	name: string;
	title: string;
	man: boolean;
}> = ({name, title, man}) => {
	const {durationInFrames, fps} = useVideoConfig();
	const frame = useCurrentFrame();
	const text = name.split(' ').map((t) => ` ${t} `);

	const textAlign = man ? 'right' : 'left';
	const margin = man ? 'marginLeft' : 'marginRight';
	const fadingOut = frame >= (durationInFrames - SLIDE_LENGTH)

	const opacity = interpolate(
		fadingOut ? durationInFrames - frame : frame,
		[0, SLIDE_LENGTH],
		[0, 1],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	return (
		<div style={{
			position: 'absolute',
			top: '20vh',
			width: '100%',
			padding: '5vw'
		}}>
			<h1
				style={{
					fontFamily: 'Helvetica',
					fontWeight: 'bold',
					fontSize: 110,
					// maxWidth: '60%',
					textAlign,
					opacity,
				}}
			>{title}</h1>
			<h2
				style={{
				fontFamily: 'Helvetica',
				fontWeight: 'bold',
				fontSize: 60,
				textAlign,
				}}
			>{text.map((t, i) => {
				return (
					<span
						key={t}
						style={{
							[margin]: 20,
							transform: `scale(${spring({
								fps,
								frame: fadingOut ? durationInFrames - frame : (frame - i * 5),
								config: {
									damping: 100,
									stiffness: 200,
									mass: 0.5,
								},
							})})`,
							display: 'inline-block',
						}}
					>
						{t}
					</span>
				);
			})}
			</h2>
		</div>
	);
};
