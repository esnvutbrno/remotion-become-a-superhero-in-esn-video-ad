import {interpolate, Sequence, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {INTRO_LENGTH, SLIDE_LENGTH, TEXT_SPRING_CONFIG} from './Ad/config';

export const Intro: React.FC<{

}> = () => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig();

	const fadingOut = frame >= (durationInFrames - SLIDE_LENGTH)

	const animate = (t: JSX.Element | string, i: number) => {
		return (
			<span
				// key={t}
				style={{
					marginRight: '.3em',
					transform: `scale(${spring({
						fps,
						frame: fadingOut ? durationInFrames - frame : (frame - i * 2),
						config: TEXT_SPRING_CONFIG,
					})})`,
					display: 'inline-block',
				}}
			>{t}</span>
		);
	};
	const delay = (f: Function, delay: number) => {
		return (v: JSX.Element | string, i: number) => f(v, i + delay);
	}

	return (
		<div style={{flex: 1, backgroundColor: 'white'}}>
				<h1 style={{
						fontSize: 90,
						position: 'absolute',
						top: '500px',
						textAlign: 'center',
						fontFamily: 'Bowlby One SC',
						fontWeight: 200,
						padding: '60px',
						color: 'white',
						textShadow: '0 0 20px black',
						display: 'inline-block'
				}}
				>
					<div style={{marginBottom: '60px'}}>
						{['Levej', 'na', <div>angličtinu?</div>].map(animate)}
					</div>
					<div style={{marginBottom: '100px'}}>
						{['Chybí', 'Ti', <div>sociálno?</div>].map(delay(animate, 15))}
					</div>
					<div style={{fontSize: 130, color: '#F7EC32', textShadow: '0 0 20px #89201f'}}>
						{['Skoč', 'mezi', <div>nás!</div>].map(delay(animate, 30))}
					</div>
				</h1>
		</div>
	);
};
