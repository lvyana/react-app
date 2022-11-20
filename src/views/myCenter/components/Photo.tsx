import React, { useRef, FC, useState } from 'react';
import Cropper, { ReactCropperElement } from 'react-cropper';
import 'cropperjs/dist/cropper.css';
// https://www.npmjs.com/package/react-cropper 地址
import Loading from '@/antdComponents/iLoading';

interface Props {
	updatepPhoto: string;
	setPhotoFinish: React.Dispatch<React.SetStateAction<string>>;
}
const Photo: FC<Props> = ({ updatepPhoto, setPhotoFinish }) => {
	const cropperRef = useRef<HTMLImageElement>(null);

	const [loading, setLoading] = useState(true);
	const onCrop = () => {
		const imageElement: HTMLImageElement | ReactCropperElement | null = cropperRef?.current;
		const cropper = (imageElement as ReactCropperElement)?.cropper;
		setPhotoFinish(cropper.getCroppedCanvas().toDataURL());
		setLoading(false);
	};

	return (
		<Loading loading={loading}>
			<Cropper
				src={updatepPhoto}
				style={{ height: 400, width: '100%' }}
				// Cropper.js options
				initialAspectRatio={16 / 9}
				guides={false}
				crop={onCrop}
				ref={cropperRef}
			/>
		</Loading>
	);
};

export default Photo;
