import {interpolate, Sequence, useCurrentFrame, useVideoConfig, Easing} from 'remotion';
import {SpeakerPanel} from './Ad/SpeakerPanel';
import {DATE_LENGTH, SLIDE_LENGTH, SPEAKER_LENGTH} from './Ad/config';
import {Superhero} from './Ad/Superhero';
import {Speakers} from './Speakers';
import bckg from './assets/bckg-2.png';
import logo from './assets/bsesn.png';
import {Intro} from './Intro';
import {DateInfo} from './DateInfo';
import {ESNLogo} from './ESNLogo';

export const Ad: React.FC<{

}> = () => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const backgLeft = interpolate(
		frame,
		[0, videoConfig.durationInFrames],
		[0, 400],
	)

	const loopLength = 30;
	const moveScale = 10;
	const forward = Math.floor(frame / loopLength) % 2 == 0;
	const translateY = interpolate(
		forward ? (frame % loopLength) : loopLength - (frame % loopLength),
		[0, loopLength],
		[0, moveScale],
		{easing: Easing.ease}
	)

	return (
		<div style={{
			flex: 1,
		}}>
			<Sequence layout="none" from={0}
								durationInFrames={450}>
				<div style={{
					width: '100%',
					height: '100%',
					position: 'absolute',
					backgroundImage: `url(${bckg})`,
					backgroundPositionX: `${backgLeft}%`,
					// backgroundSize: '1301001'
				}}>
				</div>
			</Sequence>
			<Sequence layout="none" from={0}
								durationInFrames={450}>
				<div style={{
					width: '100%',
					height: '100%',
					position: 'absolute',
					top: '150px',
					padding: '0 30px',
					transform: `translateY(${translateY}px)`,
					// backgroundColor: forward ? 'green' : 'red',
				}}>
					<img src={logo} style={{maxWidth: '100%'}}/>
				</div>
			</Sequence>
			<Sequence layout="none" from={0}
								durationInFrames={105}>
				<Intro />
			</Sequence>
			<Sequence layout="none" from={105}
								durationInFrames={DATE_LENGTH}>
				<DateInfo />
			</Sequence>
			<Sequence layout="none" from={105 + DATE_LENGTH}
								durationInFrames={3*SPEAKER_LENGTH + 2*SLIDE_LENGTH}>
				<Speakers />
			</Sequence>
			<Sequence layout="none" from={375 - SLIDE_LENGTH/2}
								durationInFrames={DATE_LENGTH - 15 }>
				<DateInfo />
			</Sequence>
			<Sequence layout="none" from={375+DATE_LENGTH-15}
								durationInFrames={30}>
				<ESNLogo />
			</Sequence>
		</div>
	);
};
