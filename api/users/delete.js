deleteData = (id) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    let raw = JSON.stringify({
      "id": id
    });
    
    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://localhost/API_Learning/php_js_api/model/delete.php", requestOptions)
      .then(response => response.text())
      .then(result => {
        let data = JSON.parse(result);
        if(data.status == 'ok'){
            alert('ok');
            location.reload();
            setTimeout(()=>{
                window.location.replace('../viwe/index.html');
            }, 1000);
            // window.open('../viwe/index.html', '_self'); // เปิด tab เดิม
            
        }
        else{
            alert('Error Someting')
        }

      })
      .catch(error => console.log('error', error));
}