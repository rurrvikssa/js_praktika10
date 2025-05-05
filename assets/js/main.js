const openModalBtn = document.querySelector('.open-modal');
const modal = document.getElementById('modal');
const closeModalBtn = document.querySelector('.close-modal');
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

openModalBtn.addEventListener('click', () => modal.classList.add('active'));
closeModalBtn.addEventListener('click', () => modal.classList.remove('active'));

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});
