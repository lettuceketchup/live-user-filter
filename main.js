const result = document.querySelector('#result');
const filter = document.querySelector('#filter');

const listItems = [];
const USERAPILINK = 'https://randomuser.me/api';
const NUMBEROFRESULTS = 50;

const getData = async () => {
    console.log('In getData()');
    const res = await fetch(`${USERAPILINK}?results=${NUMBEROFRESULTS}`);
    const { results } = await res.json();
    console.log(results);

    // Clear results
    result.innerHTML = '';
    console.log(result);
    
    results.forEach(user => {
        const li = document.createElement('li');

        listItems.push(li);

        li.innerHTML = `
            <img src="${user.picture.thumbnail}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `;
        console.log(li);
        result.appendChild(li); 
    });

};

const filterData = (searchTerm) => {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    });
}

console.log('Adding event listener');
filter.addEventListener('input', (e) => filterData(e.target.value));

console.log('Calling getData()');
getData();

/*
results:
name.first
name.last
location.city
location.country
picture.thumbnail

*/
