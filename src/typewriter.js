export default(() => {
  let i = 0
  const txt = `Click any image to play!\n Click on an image to earn points, but don't click on any more than once!`
  const speed = 60;
  const typeWriter = () => {
    if (i < txt.length) {
      document.getElementById("headerText").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  return typeWriter
})
