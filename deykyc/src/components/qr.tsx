// CustomQRCodeScanner.tsx
import { clear } from 'console';
import { useEffect, useRef, useState } from 'react';
import jsQR from 'jsqr';

const CustomQRCodeScanner: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [scannedResult, setScannedResult] = useState<string | null>(null);

  useEffect(() => {
    const handleScan = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      const scanQRCode = () => {
        if (videoRef.current && context) {
          canvas.width = videoRef.current.videoWidth;
          canvas.height = videoRef.current.videoHeight;

          context.drawImage(
            videoRef.current,
            0,
            0,
            videoRef.current.videoWidth,
            videoRef.current.videoHeight
          );

          const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
          const code = jsQR(imageData.data, imageData.width, imageData.height);

          if (code) {
            setScannedResult(code.data);
          }

          requestAnimationFrame(scanQRCode);
        }
      };

      scanQRCode();
    };

    handleScan();

    return () => {
      // Clean up the stream when the component unmounts
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        const tracks = stream.getTracks();

        tracks.forEach((track) => {
          track.stop();
        });
      }
    };
  }, []);

  return (
    <div>
      <video ref={videoRef} autoPlay playsInline muted style={{ width: '100%' , height: "100%"}} />
    </div>
  );
};

export default CustomQRCodeScanner;
