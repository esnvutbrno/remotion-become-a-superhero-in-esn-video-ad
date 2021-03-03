import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import {Logo} from './Ad/Logo';
import {Subtitle} from './Ad/Subtitle';
import {Title} from './Ad/Title';
import {SpeakerPanel} from './Ad/SpeakerPanel';
import {SLIDE_LENGTH, SPEAKER_LENGTH} from './Ad/config';
import {Superhero} from './Ad/Superhero';

export const Speakers: React.FC<{

}> = () => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const opacity = interpolate(
		frame,
		[videoConfig.durationInFrames - 25, videoConfig.durationInFrames - 15],
		[1, 0],
		{
			//extrapolateLeft: 'clamp',
			//extrapolateRight: 'clamp',
		}
	);

	return (
		<div style={{flex: 1, backgroundColor: 'white'}}>
			<div>
				<Sequence from={0} durationInFrames={SPEAKER_LENGTH}>
					<SpeakerPanel man name="Joe Kolář" title="Proč mi ESN změnilo život"/>
				</Sequence>
				<Sequence from={0} durationInFrames={SPEAKER_LENGTH + SLIDE_LENGTH / 2 }>
					<Superhero man/>
				</Sequence>

				<Sequence from={SPEAKER_LENGTH + SLIDE_LENGTH} durationInFrames={SPEAKER_LENGTH}>
					<SpeakerPanel man={false} name="Martina Hasníková" title="ESN je víc než párty"/>
				</Sequence>
				<Sequence from={SPEAKER_LENGTH + SLIDE_LENGTH / 2} durationInFrames={SPEAKER_LENGTH + SLIDE_LENGTH}>
					<Superhero man={false}/>
				</Sequence>

				<Sequence from={2*SPEAKER_LENGTH + 2*SLIDE_LENGTH} durationInFrames={SPEAKER_LENGTH}>
					<SpeakerPanel man name="Tom Kantor" title="My Way"/>
				</Sequence>
				<Sequence from={2*SPEAKER_LENGTH+1.5*SLIDE_LENGTH} durationInFrames={SPEAKER_LENGTH + SLIDE_LENGTH / 2}>
					<Superhero man/>
				</Sequence>
			</div>
		</div>
	);
};
