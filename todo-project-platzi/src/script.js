
const taskForm = document.querySelector('#task-form')
const taskInput = document.querySelector('#task-input')
const div = document.querySelector('#task-manager')

taskForm.addEventListener('submit',(e) =>{
    e.preventDefault()
    const task = taskInput.value
    if (task.length > 6){
        createTask(task)
        
        
    } else {
        alert("EPA ESCRIBA")
    }
})

function createTask(task) {
    const ul = document.createElement('ul')
    const li = document.createElement('li')
    const buttonEdit = document.createElement('span')
    const buttonRemove = document.createElement('span')

    ul.classList.add('task-list')
    buttonEdit.classList.add('edit-btnt')
    buttonRemove.classList.add('delete-btn')

    buttonEdit.textContent = ' ✏️'
    buttonRemove.textContent = ' ❌'


    li.append(task, buttonEdit, buttonRemove)

    ul.appendChild(li)
    div.appendChild(ul)
    taskInput.value

    buttonEdit.addEventListener('click',() =>{
        const newTask = prompt('Agrega el nuevo valor: ')
        li.textContent = newTask
        li.append(buttonEdit, buttonRemove)
        console.log(li)

    })

    buttonRemove.addEventListener('click',(e) =>{
        const liRemove = e.target.closest('li')
        liRemove.remove()
    })
}
