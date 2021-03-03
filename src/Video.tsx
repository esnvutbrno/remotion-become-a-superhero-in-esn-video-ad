import {Composition} from 'remotion';
import {Speakers} from './Speakers';
import {DATE_LENGTH, INTRO_LENGTH, SLIDE_LENGTH, SPEAKER_LENGTH} from './Ad/config';
import {Intro} from './Intro';
import {Ad} from './Ad';
import {DateInfo} from './DateInfo';
import {ESNLogo} from './ESNLogo';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Ad"
				component={Ad}
				durationInFrames={450}
				fps={30}
				width={1080}
				height={1920}
			/>
			<Composition
				id="Speakers"
				component={Speakers}
				durationInFrames={SPEAKER_LENGTH * 3 + 2 * SLIDE_LENGTH}
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
			<Composition
				id="DateInfo"
				component={DateInfo}
				durationInFrames={SLIDE_LENGTH +  DATE_LENGTH + SLIDE_LENGTH}
				fps={30}
				width={1080}
				height={1920}
			/>
			<Composition
				id="ESNLogo"
				component={ESNLogo}
				durationInFrames={30}
				fps={30}
				width={1080}
				height={1920}
			/>
		</>
	);
};
