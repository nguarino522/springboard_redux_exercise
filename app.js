const face = document.getElementById('mood');

document.getElementById('happy').addEventListener('click', () => {
  store.dispatch({ type: 'HAPPY', payload: '٩(◕‿◕｡)۶' });
});
document.getElementById('sad').addEventListener('click', () => {
  store.dispatch({ type: 'SAD', payload: '(ಥ﹏ಥ)' });
});
document.getElementById('angry').addEventListener('click', () => {
  store.dispatch({ type: 'ANGRY', payload: '٩(ఠ益ఠ)۶' });
});
document.getElementById('confused').addEventListener('click', () => {
  store.dispatch({ type: 'CONFUSED', payload: 'ლ(ಠ_ಠ ლ)' });
});

// function renderFace() {
//   face.innerHTML = store.getState().face;
// }

// renderFace();
// store.subscribe(renderFace);