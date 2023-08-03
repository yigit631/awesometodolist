// Yapılacak işleri saklamak için bir dizi oluşturuyoruz
let tasks = [];

// HTML öğelerini alıyoruz
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Görev ekleme işlevi
function addTask() {
    const taskText = taskInput.value.trim();
    
    // Girilen görev boş olmamalı
    if (taskText === '') {
        alert('Lütfen bir görev giriniz.');
        return;
    }

    // Görevi diziye ekleyip listeye ekliyoruz
    tasks.push(taskText);
    updateTaskList();

    // Giriş alanını temizliyoruz
    taskInput.value = '';
}

// Görev listesini güncelleme işlevi
function updateTaskList() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${task}</span><button onclick="removeTask(${index})">Remove</button>`;
        taskList.appendChild(li);
    });
}

// Görevi silme işlevi
function removeTask(index) {
    tasks.splice(index, 1);
    updateTaskList();
}

// Ekleme butonuna tıklama olayı
document.querySelector('button').addEventListener('click', addTask);

// Giriş alanına "Enter" tuşuna basıldığında ekleme işlevini çağırma
taskInput.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        addTask();
    }
});
