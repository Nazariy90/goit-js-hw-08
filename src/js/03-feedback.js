import throttle from 'lodash.throttle';
const contFormEl = document.querySelector('.feedback-form');
const userData = {};

const contFormFields = () => {
  const userInfoForm = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (!userInfoForm) {
    return;
  }
  for (const key in userInfoForm) {
    contFormEl.elements[key].value = userInfoForm[key];
    userData[key] = userInfoForm[key];
  }
};

contFormFields();

const fieldChangeFoo = e => {
  const { target: fieldEl } = e;
  const fieldElValue = fieldEl.value;
  const fieldElName = fieldEl.name;
  userData[fieldElName] = fieldElValue;
  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
};

const contFormElSubmit = event => {
  event.preventDefault();
  contFormEl.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(userData);
  userData.email = '';
  userData.message = '';
};
contFormEl.addEventListener('input', throttle(fieldChangeFoo, 500));
contFormEl.addEventListener('submit', contFormElSubmit);
