let getData = () => {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    const user = document.querySelector('#users_table');
    user.innerHTML= "Loading . . . "
    fetch("http://localhost/API_Learning/php_js_api/model/read.php", requestOptions)
        .then(response => response.text())
        .then(result => {
            user.innerHTML = '';
            let data = JSON.parse(result);
            // for( let v of data){
            //     let row = `
            //         <tr>
            //             <th scope="row">${v.id}</th>
            //             <td><img src="${v.avatar}" width ="50px" alt = ""></td>
            //             <td>${v.fname}</td>
            //             <td>${v.lname}</td>
            //             <td><a href="edit.html?id=${v.id}"></a></td>
            //         </tr>
            //     `;
            //     user.insertAdjacentHTML('beforeend', row)
            // }
            for(let i = 0; i < data.length; i++ ){
                let row = `
                    <tr>
                        <th scope="row">${i+1}</th>
                        <td><img src="${data[i].avatar}" width ="50px" alt = ""></td>
                        <td>${data[i].fname}</td>
                        <td>${data[i].lname}</td>
                        <td><a href="edit.html?id=${data[i].id}">Edit</a></td>
                        <td><a onclick="deleteData(${data[i].id})">Delete</a></td>
                    </tr>
                `;
                user.insertAdjacentHTML('beforeend', row)
            }
            console.log(data);
        })
        .catch(error => console.log('error', error));
}