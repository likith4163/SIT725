// Fetch data from the server and display it in the HTML
fetch('/api/data')
    .then(response => response.json())
    .then(data => {
        const dataList = document.getElementById('data-list');

        // Iterate through the data and create list items for each document
        data.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `Field1: ${item.field1}, Field2: ${item.field2}`;
            dataList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
