const taskListContainer = document.querySelector('.app__section-task-list')

const formTask = document.querySelector('.app__form-add-task')
const toggleFormTaskBtn = document.querySelector('.app__button--add-task')
const formLabel = document.querySelector('.app__form-label')

const cancelFormTaskBtn = document.querySelector('.app__form-footer__button--cancel')

const taskActiveDescription = document.querySelector('.app__section-active-task-description')

const textArea = document.querySelector('.app__form-textarea')

const btnCancel = document.querySelector('.app__form-footer__button--cancel')

const btnDell = document.querySelector('.app__form-footer__button--delete')

const btnDeleteCompleted = document.querySelector('#btn-remover-concluidas')
const btnDeleteAll = document.querySelector('#btn-remover-todas')

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

let editTask = null
let paragraphEdit = null

const removeTasks = (onlyCompleted) => {
    const selector = onlyCompleted ? '.app__section-task-list-item-complete' : '.app__section-task-list-item'
    document.querySelectorAll(selector).forEach((element) => {
        element.remove()
    })

    tasks = onlyCompleted ? tasks.filter(t => !t.completed) : []
    updateLocalStorage()
}

const selectTask = (task, element) => {
    if (task.completed){
        return
    }

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
    taskInEdit = null
    paragraphEdit = null
    textArea.value = ''
    formTask.classList.add('hidden')
}

const selectTaskToEdit = (task, element) => {
    if (taskInEdit == task) {
        cleanForm()
        return
    }

    formLabel.textContent = 'Editando Tarefa'
    taskInEdit = task
    paragraphEdit = element
    textArea.value = task.description
    formTask.classList.remove('hidden')
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

    button.classList.add('app_button-edit')
    const editIcon = document.createElement('img')
    editIcon.setAttribute('src', 'imagens/edit.png')

    button.appendChild(editIcon)

    button.addEventListener('click', (event) => {
        event.stopPropagation()
        selectTaskToEdit(task, paragraph)
    })

    li.onclick = () => {
        selectTask(task, li)
    }

    svgIcon.addEventListener('click', (event) =>    {
        if (task == selectedTask) {
            event.stopPropagation()
            button.setAttribute('disabled', true)
            li.classList.add('app__section-task-list-item-complete')
            selectedTask.completed = true
            updateLocalStorage()
        }
    })

    if (task.completed){
        button.setAttribute('disabled', true)
        li.classList.add('app__section-task-item-list-item-complete')
    }

    li.appendChild(svgIcon)
    li.appendChild(paragraph)
    li.appendChild(button)
    
    return li
}

tasks.forEach(task => {
    const taskItem = createTask(task)
    taskListContainer.appendChild(taskItem)
})

cancelFormTaskBtn.addEventListener('click', () => {
    formTask.classList.add('hidden')
})

btnCancel.addEventListener('click', cleanForm)

toggleFormTaskBtn.addEventListener('click', () => {
    formLabel.textContent = 'Adicionando tarefa'
    formTask.classList.toggle('hidden')
})

btnDell.addEventListener('click', () => {
    if (selectedTask) {
        const index = tasks.indexOf(selectedTask)
        if (index !== -1) {
            tasks.splice(index, 1)
        }
    
        selectedItemTask.remove()
        task.filter(t=> t != selectedTask)
        selectedItemTask = null
        selectedTask = null
    }

    updateLocalStorage()
    cleanForm()
})

const updateLocalStorage = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

formTask.addEventListener('submit', (event) => {
    event.preventDefault()
    if (taskInEdit) {
        taskInEdit.description = textArea.value
        paragraphEdit.textContent = textArea.value
    } else {
        const task = {
            description: textArea.value,
            completed: false
        }   
        tasks.push(task)
        const taskItem = createTask(task)
        taskListContainer.appendChild(taskItem)
    }
        updateLocalStorage()
        cleanForm()
})

btnDeleteCompleted.addEventListener('click', () => removeTasks(true))
btnDeleteAll.addEventListener('click', () => removeTasks(false))

document.addEventListener('TarefaFinalizada', function (e) {
    if (selectedTask) {
        selectedTask.completed = true
        selectedItemTask.classList.add('app__section-task-list-item-complete')
        selectedItemTask.querySelector('button').setAttribute('disabled', true)
        updateLocalStorage()
    }
})
