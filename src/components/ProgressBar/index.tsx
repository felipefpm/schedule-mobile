import { useEffect } from "react";
import { StyledViewContainerProgressBar, StyledViewContentProgressBar } from "./styles";
import { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

interface ProgressBarProps {
  progress?: number 
}

export function ProgressBar({ progress = 0 }: ProgressBarProps) {
  const sharedProgress = useSharedValue(progress)

  const style = useAnimatedStyle(() => {
    return {
      width: `${sharedProgress.value}%`
    }
  })

  useEffect(() => {
    sharedProgress.value = withTiming(progress)
  }, [progress])

  return (
    <StyledViewContainerProgressBar>
      <StyledViewContentProgressBar 
        style={style} 
      />
    </StyledViewContainerProgressBar>
  )
}