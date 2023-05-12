getOneData = () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("http://localhost/API_Learning/php_js_api/model/readone.php?id=" + id, requestOptions)
        .then(response => response.text())
        .then(result => {
            let data = JSON.parse(result);
            document.querySelector('#fname').value = data.fname;
            document.querySelector('#lname').value = data.lname;
            document.querySelector('#email').value = data.email;
            document.querySelector('#avatar').value = data.avatar;

        })
        .catch(error => console.log('error', error));

}


updateData = () => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    let fname = document.querySelector('#fname').value;
    let lname = document.querySelector('#lname').value;
    let email = document.querySelector('#email').value;
    let avatar = document.querySelector('#avatar').value;

    if (fname === '' || lname === '' || email === '' || avatar === '') {
        alert('Please enter all fields');
    } else {
        let raw = JSON.stringify({
            "id" : id,
            "fname": fname,
            "lname": lname,
            "email": email,
            "avatar": avatar
        });
        let requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
          
          fetch("http://localhost/API_Learning/php_js_api/model/update.php", requestOptions)
            .then(response => response.text())
            .then(result => { 
                let data = JSON.parse(result);
                if(data.status == 'ok'){
                    alert('ok');
                    window.location.replace('../viwe/index.html');
                    // window.open('../viwe/index.html', '_self'); // เปิด tab เดิม
                    
                }
                else{
                    alert('Error Someting')
                }
            })
            .catch(error => console.log('error', error));
    }
}
