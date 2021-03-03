import {Composition} from 'remotion';
import {Speakers} from './Speakers';
import {INTRO_LENGTH, SLIDE_LENGTH, SPEAKER_LENGTH} from './Ad/config';
import {Intro} from './Intro';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Speakers"
				component={Speakers}
				durationInFrames={SPEAKER_LENGTH * 3 + 2* SLIDE_LENGTH}
				fps={30}
				width={1080}
				height={1920}
			/>
			<Composition
				id="Intro"
				component={Intro}
				durationInFrames={SLIDE_LENGTH +  INTRO_LENGTH + SLIDE_LENGTH}
				fps={30}
				width={1080}
				height={1920}
			/>
		</>
	);
};
