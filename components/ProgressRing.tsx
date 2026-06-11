import Svg, { Circle } from "react-native-svg";
import { View, Text } from "react-native";

type Props = {
  progress: number;
};

export default function ProgressRing({ progress }: Props) {
  const radius = 70;
  const strokeWidth = 12;

  const circumference = 2 * Math.PI * radius;

  const strokeDashoffset =
    circumference - (progress / 100) * circumference;

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Svg width={180} height={180}>
        <Circle
          cx="90"
          cy="90"
          r={radius}
          stroke="#334155"
          strokeWidth={strokeWidth}
          fill="none"
        />

        <Circle
          cx="90"
          cy="90"
          r={radius}
          stroke="#CCFF00"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-90"
          origin="90,90"
        />
      </Svg>

      <View
        style={{
          position: "absolute",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 28,
            fontWeight: "bold",
          }}
        >
          {progress}%
        </Text>
      </View>
    </View>
  );
}