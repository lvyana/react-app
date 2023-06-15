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
	const [recording, setRecording] = useState(false);
	const [cameraOn, setCameraOn] = useState(false);
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const mediaRecorderRef = useRef<MediaRecorder | null>(null);
	const chunksRef = useRef<BlobPart[]>([]);

	const handleStartRecording = async () => {
		if (!cameraOn) {
			await turnCameraOn();
		}

		if (videoRef.current && videoRef.current.srcObject) {
			mediaRecorderRef.current = new MediaRecorder(videoRef.current.srcObject as MediaStream, { mimeType: 'video/webm' });
		}

		if (mediaRecorderRef.current) {
			mediaRecorderRef.current.ondataavailable = handleDataAvailable;
			mediaRecorderRef.current.start();
			setRecording(true);
		}
	};

	const turnCameraOn = async () => {
		try {
			const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
			if (videoRef.current) {
				videoRef.current.srcObject = stream;
			}
			setCameraOn(true);
		} catch (error) {
			// console.error(error);
		}
	};

	const handleDataAvailable = (event: BlobEvent) => {
		chunksRef.current.push(event.data);
	};

	const handleStopRecording = () => {
		mediaRecorderRef.current?.stop();
		setRecording(false);
	};

	const turnCameraOff = () => {
		const stream = videoRef.current?.srcObject;
		if (stream) {
			if ('getTracks' in stream) {
				const tracks = stream.getTracks();
				tracks.forEach((track) => {
					track.stop();
				});
			}
		}

		if (videoRef.current) {
			videoRef.current.srcObject = null;
		}

		setCameraOn(false);
	};

	const downloadVideo = () => {
		const blob = new Blob(chunksRef.current, { type: 'video/webm' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = 'video.webm';
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
		chunksRef.current = [];
	};

	const saveImg = () => {
		const cameraVideo = document.getElementById('cameraVideo');
		if (cameraVideo) {
			downloadImg(cameraVideo);
		}
	};

	return (
		<div>
			<video id="cameraVideo" ref={videoRef} autoPlay />
			<div>
				{!cameraOn && (
					<Button type="primary" onClick={turnCameraOn}>
						打开摄像头
					</Button>
				)}
				{cameraOn && !recording && (
					<Button type="primary" onClick={handleStartRecording}>
						开始录制
					</Button>
				)}
				{recording && (
					<Button type="primary" onClick={handleStopRecording}>
						停止录制
					</Button>
				)}
				{cameraOn && !recording && (
					<Button type="primary" onClick={turnCameraOff}>
						关闭摄像头
					</Button>
				)}
				{mediaRecorderRef.current && mediaRecorderRef.current.state === 'inactive' && (
					<Button type="primary" onClick={downloadVideo}>
						下载视频
					</Button>
				)}
				{cameraOn && (
					<Button type="primary" onClick={saveImg}>
						拍照
					</Button>
				)}
			</div>
		</div>
	);
};

export default VideoCall;
