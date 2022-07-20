import * as faceapi from "face-api.js";
import { useState, useRef, useEffect } from 'react';
import './video-box.styles.scss';

const VideoBox = () => {

  const [initializing, setInitializing] = useState(false);
  const videoRef = useRef();
  const canvasRef = useRef();

  useEffect(() => {
    setInitializing(true);
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri(process.env.PUBLIC_URL + "/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri(process.env.PUBLIC_URL + "/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri(process.env.PUBLIC_URL + "/models"),
      faceapi.nets.faceExpressionNet.loadFromUri(process.env.PUBLIC_URL + "/models")
    ]).then(startVideo);
  }, []);

  const startVideo = () => {
    navigator.getUserMedia(
      { video: {} },
      (stream) => (videoRef.current.srcObject = stream),
      (err) => console.error(err)
    );
  };

  const handleVideoOnPlay = () => {
    setInterval(async () => {
      if (initializing) setInitializing(false);
      canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(
        videoRef.current
      );

      faceapi.matchDimensions(canvasRef.current, { width: videoRef.current.clientWidth, height: videoRef.current.clientHeight });
      const detections = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceExpressions();
      const resizedDetections = faceapi.resizeResults(detections, { width: videoRef.current.clientWidth, height: videoRef.current.clientHeight });
      canvasRef.current.getContext("2d").clearRect(0, 0, videoRef.current.clientWidth, videoRef.current.clientHeight);
      faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
      faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections);
      faceapi.draw.drawFaceExpressions(canvasRef.current, resizedDetections);
    }, 1000);
  };

  return (
    <article className="video-box">
      <div className="display-flex justify-content-center">
        <video
          ref={videoRef}
          autoPlay
          width='90%'
          muted
          onPlay={handleVideoOnPlay}
        ></video>
        <canvas ref={canvasRef} className="position-absolute"></canvas>
      </div>
    </article>
  );

}

export default VideoBox;