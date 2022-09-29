
    const inputEl = document.getElementById('input');
    const listCont = document.getElementById('listContainer');
    const submitEl = document.getElementById('submit');
    const clearEl = document.getElementById('clear');
    const box = document.querySelectorAll('.line-checkbox');

    submitEl.addEventListener('click', () => {
        if (inputEl.value === '') {
            alert('type something to do'); 
        } else {
        // create p element
        let item = document.createElement('p');
        // turning list item to text
        item.innerText = inputEl.value;
        // blank string after submitting
        inputEl.value = '';
        // appending checkbox to every list item
        inputEl.placeholder = 'type...';
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        
        //create new div element 
        let div = document.createElement('div');
        div.appendChild(checkbox);
        div.appendChild(item);
        listCont.appendChild(div);
        div.className = 'list-Cont';
        checkbox.className = 'line-checkbox';
        }
        
    });
    
    // clears list after toggling 
    clearEl.addEventListener('click', () => {
        let itemCont = document.getElementsByClassName('list-Cont');
        for (const item of itemCont) {
            item.innerHTML = '';
        }
    
    })

