import { useEffect, useState } from "react";
import "./LoadingEffect.css";

const LoadingEffect = ({ loading, waiting }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  return (
    <div>
      <div className={`spanner ${isLoading ? "show vh-100" : ""}`}>
        <div className="loader"></div>
        <p className="text-title loading-text mt-5">
          {waiting ? "Waiting for other players..." : "Loading"}
        </p>
      </div>
    </div>
  );
};

export default LoadingEffect;
