import './style.css';

console.log('index js is connected');
// nav bar
const topNavContainer = document.createElement('div');
topNavContainer.innerHTML = `
  <div class="top-nav-container">
    <div class="logo-container">
      <img class="logo-image" src="logo.png" alt="TodoLite Logo">
      <p class="logo-text">TodoLite</p>
    </div>
    <button class="add-task-button">+ Add Task</button>
  </div>
`;
document.body.appendChild(topNavContainer);

// side nav

// task-list
