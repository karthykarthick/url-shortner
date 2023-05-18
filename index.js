const token = "835c0251c7e63e54992ebf4df0ef791cf8e9277e"
function handleClick(){
    const element = document.getElementById("url").value;
   

    fetch('https://api-ssl.bitly.com/v4/shorten', {
        method: 'POST',
        headers: {
            'Authorization': '835c0251c7e63e54992ebf4df0ef791cf8e9277e',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "long_url": element, "domain": "bit.ly"})
    }).then(res=>res.json()).then(data=>{
        console.log(data.link);
        const link = document.createElement('a')
        link.href = data.link
        link.textContent = data.link
        
        const container = document.getElementById("result")
        container.appendChild(link)
    });
}
