document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const buttons = container.querySelectorAll('button');
    for (let button of buttons) {
        button.addEventListener("click", (event) => {
            let catId = button.id.split("-")[1];
            console.log(catId);
            
            fetch(`/api/cats/${catId}`, {
                method: 'DELETE'
            }).then(response => {
                return response.json();
            }).then(data => {
                console.log(data);
            }).catch(error => {
                console.log('error', error)
            })
        })
    }
});