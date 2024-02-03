
chrome.runtime.sendMessage({name: "message"}, (response) => {
    
    console.log(response)
    document.querySelector('h1').innerHTML = response.puzzle;

}); 