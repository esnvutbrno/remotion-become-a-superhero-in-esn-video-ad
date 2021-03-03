import {interpolate, Sequence, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {INTRO_LENGTH, SLIDE_LENGTH} from './Ad/config';

export const Intro: React.FC<{

}> = () => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig();

	const text = "nejaky text co tam bude ale jeste nevime co to bude za text".split(' ').map((t) => ` ${t} `);
	const fadingOut = frame >= (durationInFrames - SLIDE_LENGTH)

	const move = interpolate(
		frame,
		[0, durationInFrames],
		[0, 30],
	)

	return (
		<div style={{flex: 1, backgroundColor: 'white'}}>
			<Sequence from={0} durationInFrames={INTRO_LENGTH + 2*SLIDE_LENGTH}>
				<h1 style={{
						fontSize: 100,
						position: 'absolute',
						top: '600px',
						textAlign: 'center',
						fontFamily: 'Bowlby One SC',
						fontWeight: 200,
						padding: '40px',
						color: 'white',
						textShadow: '0 0 20px black',
				}}
				>
					{text.map((t, i) => {
							return (
								<span
									key={t}
									style={{
										marginRight: '.3em',
										transform: `scale(${spring({
											fps,
											frame: fadingOut ? durationInFrames - frame : (frame - i * 2),
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
				</h1>
			</Sequence>
		</div>
	);
};
