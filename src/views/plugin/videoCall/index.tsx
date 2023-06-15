/**
 * @file 视频通话
 * @author ly
 * @createDate 2023年6月14日
 */
import React, { useRef, useState } from 'react';
import { Button } from 'antd';
import downloadImg from '@/utils/html2canvas';

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const VideoCall = () => {
	const cameraVideoRef = useRef<HTMLVideoElement | null>(null);

	function successFunc(mediaStream: MediaStream) {
		const video = cameraVideoRef.current;
		// const video = document.getElementById('cameraVideo') as HTMLVideoElement;
		// 旧的浏览器可能没有srcObject
		if (video) {
			if ('srcObject' in video) {
				video.srcObject = mediaStream;
			}

			video.onloadedmetadata = () => {
				video.play();
			};
		}
	}

	function errorFunc(err: Error) {
		// console.log(`${err.name}: ${err.message}`);
		// always check for errors at the end.
	}

	// 启动摄像头
	const openMedia = () => {
		// 打开摄像头
		const opt = {
			video: true,
			audio: true
		};
		navigator.mediaDevices.getUserMedia(opt).then(successFunc).catch(errorFunc);
	};

	// 关闭摄像头
	const closeMedia = () => {
		// const video = document.getElementById('cameraVideo') as HTMLVideoElement;
		const video = cameraVideoRef.current;

		const stream = video?.srcObject;
		if (stream) {
			if ('getTracks' in stream) {
				const tracks = stream.getTracks();
				tracks.forEach((track) => {
					track.stop();
				});
			}
		}
	};

	const saveImg = () => {
		const cameraVideo = document.getElementById('cameraVideo');
		if (cameraVideo) {
			downloadImg(cameraVideo);
		}
	};

	const [recording, setRecording] = useState(false);

	const mediaRecorderRef = useRef<MediaRecorder | null>(null);
	const chunksRef = useRef<BlobPart[]>([]);

	const handleStartRecording = async () => {
		// openMedia();
		const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });

		if (cameraVideoRef.current) {
			cameraVideoRef.current.srcObject = stream;

			mediaRecorderRef.current = new MediaRecorder(stream, { mimeType: 'video/webm' });
			mediaRecorderRef.current.ondataavailable = handleDataAvailable;
			mediaRecorderRef.current.start();

			cameraVideoRef.current.onloadedmetadata = () => {
				cameraVideoRef.current?.play();
			};
		}
		setRecording(true);
	};

	const handleStopRecording = () => {
		mediaRecorderRef.current?.stop();
		setRecording(false);
		closeMedia();
	};

	const handleDataAvailable = (event: BlobEvent) => {
		chunksRef.current.push(event.data);
	};

	const handleDownload = () => {
		const blob = new Blob(chunksRef.current, { type: 'video/webm' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = 'video.webm';
		document.body.appendChild(a);
		a.click();
		URL.revokeObjectURL(url);
	};

	return (
		<div>
			<div>
				<video
					id="cameraVideo"
					ref={cameraVideoRef}
					style={{
						width: '800px',
						height: '720px'
					}}
				/>
			</div>
			<div>
				{recording ? (
					<Button type="primary" onClick={handleStopRecording}>
						Stop Recording
					</Button>
				) : (
					<Button type="primary" onClick={handleStartRecording}>
						Start Recording
					</Button>
				)}
				<Button type="primary" onClick={handleDownload}>
					Download Video
				</Button>
			</div>
			<Button type="primary" onClick={openMedia}>
				打开摄像头
			</Button>
			<Button type="primary" onClick={closeMedia}>
				关闭摄像头
			</Button>
			<Button type="primary" onClick={saveImg}>
				拍照
			</Button>
		</div>
	);
};

export default VideoCall;
