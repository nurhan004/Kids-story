document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("currendUser"));
    if (!user) {
      window.location.href = "../../index.html";
    } else {
      document.getElementById("userName").textContent = user.name;
    }
  
    const logoutBtn = document.querySelector("#logoutBtn");
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("currendUser");
      window.location.href = "../../index.html";
    });
  });
// Получаем все элементы, открывающие модальные окна
const openModalButtons = document.querySelectorAll('.open-modal');
// Получаем все модальные окна
const modals = document.querySelectorAll('.modal');
// Получаем все кнопки закрытия
const closeButtons = document.querySelectorAll('.close');

// Функция для открытия модального окна
openModalButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault(); // Предотвращаем переход по ссылке
    const modalId = button.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    modal.style.display = 'flex';
  });
});

// Функция для закрытия модального окна
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.closest('.modal').style.display = 'none';
  });
});

// Закрытие модального окна при клике вне его
window.addEventListener('click', (event) => {
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});  



document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("currendUser"));
    
    // Проверка, есть ли пользователь в localStorage
    if (!user) {
        window.location.href = "../../index.html";
        return; // Завершаем выполнение, чтобы остальной код не выполнялся
    }

    // Отображение имени пользователя
    const userNameElement = document.getElementById("userName");
    if (userNameElement) {
        userNameElement.textContent = user.name;
    }

    // Настройка кнопки "Выйти"
    const logoutBtn = document.querySelector("#logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("currendUser"); // Удаляем данные пользователя
            window.location.href = "../../index.html"; // Перенаправление на главную страницу
        });
    } else {
        console.error("Кнопка выхода не найдена.");
    }
});

  