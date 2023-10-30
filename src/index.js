document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
  let form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleTodo(e.target.new_task.value);
    form.reset();
  });



function handleTodo(todo){

  let p = document.createElement('p');
  let btn = document.createElement('button')
  document.addEventListener('click', deleteTodo)

  btn.textContent = 'Delete'

  p.textContent = `${todo} `;
  p.appendChild(btn)
  console.log(p)
  document.querySelector('#list').appendChild(p);

}

function deleteTodo(e){
  e.target.parentNode.remove();
}