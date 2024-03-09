import { StyledViewContainerProgressBar, StyledViewContentProgressBar } from "./styles";

interface ProgressBarProps {
  progress?: number 
}

export function ProgressBar({ progress = 0 }: ProgressBarProps) {

  return (
    <StyledViewContainerProgressBar>
      <StyledViewContentProgressBar 
        style={{ width: `${progress}%`}} 
      />
    </StyledViewContainerProgressBar>
  )
}