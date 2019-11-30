export const COUNTUP = "COUNTUP";
export const COUNTDOWN = "COUNTDOWN";

export const countUp = () => {
  return {
    type: "COUNTUP"
  }
}

export const countDown = () => {
  return {
    type: "COUNTDOWN"
  }
}