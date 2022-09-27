

    const inputEl = document.getElementById('input');
    const listCont = document.getElementById('listContainer');
    const submitEl = document.getElementById('submit');
    const clearEl = document.getElementById('clear');

    inputEl.placeholder = 'type...';

    submitEl.addEventListener('click', () => {
        let item = document.createElement('p');
        item.innerText = inputEl.value;
        listCont.appendChild(item);
        inputEl.value = '';
        listCont.className = 'list-container';
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        item.appendChild(checkbox);

    });
    clearEl.addEventListener('click', () => {
        listCont.innerHTML = '';
    })