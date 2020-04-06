type Messages = {
    data: string,
    name: string,
    message: string
}

let dataArray: Messages[] = [
    {
        data: '14:59:57',
        name: 'Rita',
        message: 'Voluptatem quis et sunt maxime in sit nisi.'
    },
    {
        data: '10:24:51',
        name: 'Mylene',
        message: 'Et et enim nihil et excepturi eaque ipsa.'
    },
    {
        data: '00:33:37',
        name: 'Abraham',
        message: 'Fugiat voluptates incidunt. Sed quo a blanditiis. Sunt suscipit aut. Totam tempora quisquam inventore minima et amet. Est est nesciunt blanditiis.'
    }
];

let messageTableDiv: InnerHTML = document.querySelector('.message-table');
messageTableDiv.innerHTML = '';

for (let i = 0; i < dataArray.length; i++) {
    messageTableDiv.innerHTML += 
    `<div class="my-table-row">
        <div class="my-table-date">${dataArray[i].data}</div>
        <div class="my-table-message">
            <span>${dataArray[i].name}</span>
            <span>${dataArray[i].message}</span>
        </div>
    </div>`;
}