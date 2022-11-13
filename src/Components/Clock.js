import { useEffect } from "react"

export const Clock = ({ secs, setSeconds }) => {
  useEffect(() => {
    let sampleInterval = setInterval(() => {
      if (secs > 0) {
        setSeconds(secs - 1);
      }
    }, 1000);
    return () => {
      clearInterval(sampleInterval);
    };
  });

  return (
    <div>
      {!(secs) ? "" : (
        <p>
          {" "}
          {secs < 10 ? `0${secs}` : secs}
        </p>
      )}
    </div>
  );
}
