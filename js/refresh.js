const button = document.querySelector("#refresh button");

function handleClick(event){
    localStorage.clear();    
    clearGreetingsAndTodo();
    changeBackgroundImage();
    todaysQuote();
}

button.addEventListener("click", handleClick);