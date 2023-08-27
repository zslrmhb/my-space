import { useRef, useEffect, useState } from "react";
import SkillGraphECharts from "./SkillGraphECharts";

export default function Skills() {
  const [childDimensions, setChildDimensions] = useState({
    width: 0,
    height: 0,
  });

  const childrenRef = useRef();
  useEffect(() => {
    if (childrenRef.current) {
      const { width, height } = childrenRef.current.getBoundingClientRect();
      setChildDimensions({ width, height });
    }
  }, []);

  return (
    <div ref={childrenRef} className="flex flex-grow w-full h-full">
      <SkillGraphECharts  />
    </div>
  );
}
