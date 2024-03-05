  // avatar
  export const generateAvatar = (initials) => {
    return `https://ui-avatars.com/api/?name=${initials}&background=${randomColor(
      {
        luminosity: 'light',
      }
    ).replace('#', '')}&color=000000`;
  };