// TODO: Fix type of themeModeColors
export const themeModeColors: any = {
  _dark: { bg: "blueGray.900" },
  // _light: { bg: "blueGray.50" },
  _light: {
    bg: {
      linearGradient: {
        colors: ["yellow.400", "amber.300"],
        start: [0, 0],
        end: [1, 0],
      },
    },
  },
};

export const themeModeColorsBAW: any = {
  _dark: { bg: "blueGray.900" },
  // _light: { bg: "blueGray.50" },
  _light: {
    bg: "white",
  },
};
