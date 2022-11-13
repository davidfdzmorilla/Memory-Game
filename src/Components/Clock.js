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
        <h2>
          {" "}
          {secs < 10 ? `0${secs}` : secs}
        </h2>
      )}
    </div>
  );
}
