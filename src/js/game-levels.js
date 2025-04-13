const images = import.meta.glob('../img/game-levels/**/*.{png,jpg}', {
  eager: true,
  import: 'default',
});

function createAnimation(container, animationName) {
  const img =
    container.querySelector('img') ||
    (() => {
      const newImg = document.createElement('img');
      container.appendChild(newImg);
      return newImg;
    })();

  const isDesktop = () => container.classList.contains('gl-item-img-desk');
  let group = isDesktop() ? 'desk' : 'mob';
  let index = 0;
  let intervalId = null;

  function resolveImagePath(name, frame, is2x = false) {
    const suffix = is2x ? '@2x' : '';
    const file = `../img/game-levels/${name}-${frame}${suffix}.png`;
    return images[file];
  }

  const frames = [1, 2, 3].map(i => ({
    src: resolveImagePath(`${animationName}`, i),
    src2x: resolveImagePath(`${animationName}`, i, true),
  }));

  function setImage(i) {
    const { src, src2x } = frames[i];
    img.classList.remove('active');

    setTimeout(() => {
      img.src = src;
      img.srcset = `${src} 1x, ${src2x} 2x`;
      img.onload = () => {
        requestAnimationFrame(() => {
          img.classList.add('active');
        });
      };
    }, 300);
  }

  function startRotation() {
    if (intervalId) return;
    intervalId = setInterval(() => {
      index = (index + 1) % frames.length;
      setImage(index);
    }, 1000);
  }

  function stopRotation() {
    clearInterval(intervalId);
    intervalId = null;
  }

  window.addEventListener('resize', () => {
    const newGroup = isDesktop() ? 'desk' : 'mob';
    if (newGroup !== group) {
      group = newGroup;
      index = 0;
      setImage(index);
    }
  });

  setImage(index);
  startRotation();
}

document
  .querySelectorAll('.gl-item-img-mob, .gl-item-img-desk')
  .forEach(container => {
    const name = container.dataset.name;
    if (!name) return;
    createAnimation(container, name);
  });
