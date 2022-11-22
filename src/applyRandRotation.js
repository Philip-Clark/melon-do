export const randomRotation = (amount = 20) =>
  document.documentElement.style.setProperty(
    '--randRotation',
    Math.random() * amount * 2 - amount + 'deg'
  );
