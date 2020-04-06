var dataArray = [
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
var messageTableDiv = document.querySelector('.message-table');
messageTableDiv.innerHTML = '';
for (var i = 0; i < dataArray.length; i++) {
    messageTableDiv.innerHTML +=
        "<div class=\"my-table-row\">\n        <div class=\"my-table-date\">" + dataArray[i].data + "</div>\n        <div class=\"my-table-message\">\n            <span>" + dataArray[i].name + "</span>\n            <span>" + dataArray[i].message + "</span>\n        </div>\n    </div>";
}
