export default((element, txt) => {
  let i = 0;
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
