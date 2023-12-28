const baseSuccessCallback = (event) => {
  event.preventDefault();
  const form = document.querySelector('[data-form-feedback]');
  const url = 'https://echo.htmlacademy.ru/';
  const formData = new FormData(form);
  fetch(url, {
    method: 'POST',
    body: formData,
  }).then((response) => response.text()).then((data) => {
    document.body.innerHTML = `<pre>${data}</pre>`;
  }).catch(() => {
    form.noValidate = false;
    form.reportValidity();
  });
};

const baseErrorCallback = (event) => {
  event.preventDefault();
};

export const callbacks = {
  base: {
    reset: false,
    resetTimeout: 500,
    successCallback: baseSuccessCallback,
    errorCallback: baseErrorCallback,
  },
};
