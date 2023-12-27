const taskListContainer = document.querySelector('.app__section-task-list')
const formTask = document.querySelector('.app__form-add-task')
const toggleFormTaskBtn = document.querySelector('.app__button--add-task')
const formLabel = document.querySelector('.app__form-label')
const textArea = document.querySelector('.app__form-textarea')
const cancelFormTaskBtn = document.querySelector('.app__form-footer__button--cancel')
const btnCancel = document.querySelector('.app__form-footer__button--cancel')
const taskActiveDescription = document.querySelector('.app__section-active-task-description')

const localStorageTask = localStorage.getItem('tasks')
let tasks = localStorageTask ? JSON.parse(localStorageTask) : []

const taskIconSvg = `
<svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24"
    fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#FFF" />
    <path
        d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z"
        fill="#01080E" />
</svg>
`

let selectedTask = null
let selectedItemTask = null

const selectTask = (task, element) => {
    document.querySelectorAll('.app__section-task-list-item-active').forEach(function (button) { 
        button.classList.remove('app__section-task-list-item-active')
    })

    if (selectedTask == task) {
        taskActiveDescription.textContent = null
        selectedItemTask = null
        selectedTask = null
        return
    }
    selectedTask = task
    selectedItemTask = element
    taskActiveDescription.textContent = task.description
    element.classList.add('app__section-task-list-item-active')
}

const cleanForm = () => {
    textArea.value = ''
    formTask.classList.add('hidden')
}

function createTask(task) {
    const li = document.createElement('li')
    li.classList.add('app__section-task-list-item')

    const svgIcon = document.createElement('svg')
    svgIcon.innerHTML = taskIconSvg

    const paragraph = document.createElement('p')
    paragraph.classList.add('app__section-task-list-item-description')
    paragraph.textContent = task.description

    const button = document.createElement('button')

    li.onclick = () => {
        selectTask(task, li)
    }

    svgIcon.addEventListener('click', (event) => {
        event.stopPropagation()
        button.setAttribute('disabled', true)
        li.classList.add('app__section-task-list-item-complete')
    })

    if (task.completed){
        button.setAttribute('disabled', true)
        li.classList.add('app__section-task-item-list-item-complete')
    }

    li.appendChild(svgIcon)
    li.appendChild(paragraph)

    return li
}

tasks.forEach(task => {
    const taskItem = createTask(task)
    taskListContainer.appendChild(taskItem)
})

toggleFormTaskBtn.addEventListener('click', () => {
    formLabel.textContent = 'Adicionando tarefa'
    formTask.classList.toggle('hidden')
})

const updateLocalStorage = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

formTask.addEventListener('submit', (event) => {
    event.preventDefault()
    const task = {
        description: textArea.value,
        completed: false
    }
    tasks.push(task)
    const taskItem = createTask(task)
    taskListContainer.appendChild(taskItem)
    updateLocalStorage()
    cleanForm()
})

cancelFormTaskBtn.addEventListener('click', () => {
    formTask.classList.add('hidden')
})

btnCancel.addEventListener('click', cleanForm)