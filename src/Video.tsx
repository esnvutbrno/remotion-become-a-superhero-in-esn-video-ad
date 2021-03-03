import {Composition} from 'remotion';
import {Speakers} from './Speakers';
import {Logo} from './Ad/Logo';
import {Subtitle} from './Ad/Subtitle';
import {SLIDE_LENGTH, SPEAKER_LENGTH} from './Ad/config';

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
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
		</>
	);
};
