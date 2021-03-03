import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {SLIDE_LENGTH} from './config';

export const SpeakerPanel: React.FC<{
	name: string;
	title: string;
	man: boolean;
	fontSize?: number;
}> = ({name, title, man, fontSize = 125}) => {
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
			top: '600px',
			width: '100%',
			padding: '60px'
		}}>
			<h1
				style={{
					fontFamily: 'Bowlby One SC',
					fontWeight: 200,
					lineHeight: 1.2,
					color: 'white',
					textShadow: '0 0 20px black',
					// maxWidth: '60%',
					textAlign,
					opacity,
					fontSize,
				}}
			>{title.split(' ').map((t, i)=><span>{t}<br/></span>)}</h1>
			<h2
				style={{
				fontSize: 60,
				textAlign,
				fontFamily: 'Bowlby One SC',
				fontWeight: 200
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
							display: 'block',
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
