import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils"

interface CountdownProps {
   time: number;
   onTimerEnd: () => void;
}

const Countdown: React.FC<CountdownProps> = ({ time, onTimerEnd }) => {
   const [remainingTime, setRemainingTime] = useState<number>(time);
   const [isCritical, setIsCritical] = useState<boolean>(false);

   useEffect(() => {
      if (remainingTime <= 0) {
         onTimerEnd();
         return;
      }

      if (remainingTime <= 10) {
         setIsCritical(true);
      }

      const timer = setInterval(() => {
         setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
   }, [remainingTime, onTimerEnd, time]);

   const formatTime = (timeInSeconds: number): string => {
      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = timeInSeconds % 60;
      return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
   };

   return (
      <div
         className={cn(
            "text-lg font-semibold",
            isCritical ? "text-red-500" : "text-black dark:text-white"
         )}
      >
         {formatTime(remainingTime)}
      </div>
   );
};

export default Countdown;
