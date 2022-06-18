fetch("https://icanhazdadjoke.com/slack").then(data=>data.json()).then(jokedata=>{
    const funtext=jokedata.attachments[0].text;
    const funElement=document.getElementById("jokeElement");
    funElement.innerHTML=funtext;
})