     // get input..
const loadbook = () => {
    // console.log('ami')
    const searchfield = document.getElementById('search-field');
    const searchtext = searchfield.value;
    console.log(searchtext);
    searchfield.value = '';
        // search thr result......
    const url = `https://openlibrary.org/search.json?q=${searchtext}`
     fetch(url)
    .then(res => res.json())
    .then(data => displaybook(data.docs))
    
}
        // display the result.....
    const displaybook = books => {
    // console.log(books);
    const displayresult = document.getElementById('display-result');
    // clear data..
    displayresult.textContent = '';
    books.forEach(book => {
        console.log(book);
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        <div class="card">
                <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h4 class="card-title">${book.title}</h4>
            <h6 class="card-title">${book.author_name}</h6>
            <p class="card-text text-center">published:${book.first_publish_year}</p>
        </div>
      </div>`;
      displayresult.appendChild(div);
    });
}