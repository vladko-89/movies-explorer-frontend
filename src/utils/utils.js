export const getResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

//  Мягкий скролл
export const anchorScroll = (anchor) => {
  if (anchor) {
    let anchorElement = document.getElementById(anchor);
    anchorElement.scrollIntoView({ behavior: 'smooth' });
  }
}

// Форматирование продолжительности фильмов
export const translateDuration = (n) => {
  if (n >= 60) {
    return `${Math.floor(n / 60)} ч   ${n % 60} м`
  }
  return `${n} м`
}