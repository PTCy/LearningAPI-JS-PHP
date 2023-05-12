
insertData = () => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let fname = document.querySelector('#fname').value;
    let lname = document.querySelector('#lname').value;
    let email = document.querySelector('#email').value;
    let avatar = document.querySelector('#avatar').value;

    if (fname === '' || lname === '' || email === '' || avatar === '') {
        alert('Please enter all fields');
    } else {
        let raw = JSON.stringify({
            "fname": fname,
            "lname": lname,
            "email": email,
            "avatar": avatar
        });
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
          
          fetch("http://localhost/API_Learning/php_js_api/model/create.php", requestOptions)
            .then(response => response.text())
            .then(result => { 
                let data = JSON.parse(result);
                if(data.status == 'ok'){
                    alert('ok');
                    window.location.replace('../viwe/index.html');
                    // window.open('../viwe/index.html','_self');
                    
                }
                else{
                    alert('Error Someting')
                }
            })
            .catch(error => console.log('error', error));
    }
}
