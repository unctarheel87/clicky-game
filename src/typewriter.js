export default((element) => {
  let i = 0
  const txt = "Click on an image to earn points, but don't click on any more than once!"
  const speed = 60;
  const typeWriter = () => {
    if (i < txt.length) {
      element.textContent += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  return typeWriter(element)
})
