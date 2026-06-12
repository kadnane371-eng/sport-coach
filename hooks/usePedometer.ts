import { useEffect } from "react";
import { Pedometer } from "expo-sensors";
import { useStore } from "../store/useStore";


export default function usePedometer() {
  const setSteps = useStore(
    (state) => state.setSteps
  );

  useEffect(() => {
    let subscription: any;

    const startPedometer = async () => {
      const available =
        await Pedometer.isAvailableAsync();

      if (!available) {
        console.log("Pedometer not available");
        return;
      }

      subscription =
        Pedometer.watchStepCount(
          (result) => {
            setSteps(result.steps);
          }
        );
    };

    startPedometer();

    return () => {
      subscription?.remove();
    };
  }, []);
}