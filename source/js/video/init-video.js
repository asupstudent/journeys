function findVideos() {
  const videos = document.querySelectorAll('.hero__video');

  for (let i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  const button = video.querySelector('.hero__video-button');
  const poster = video.querySelector('img');

  button.addEventListener('click', () => {
    const iframe = createIframe();
    poster.remove();
    button.remove();
    video.appendChild(iframe);
  });

  video.classList.add('hero__video--enabled');
}

function createIframe() {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1');
  iframe.setAttribute('title', 'Бесплатные интерактивные онлайн-курсы');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
  iframe.setAttribute('allowfullscreen', '');
  iframe.classList.add('hero__video-player');

  return iframe;
}

export {findVideos};
