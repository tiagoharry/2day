const sendToSlack = () => {
  const email = document.getElementById('email').value;
  const slackMessage = `Um contato para saber mais sobre como utilizar essas ferramentas requisitado! 
  \nEmail: ${email} 
  `

  // @todo
  fetch('https://hooks.slack.com/services/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', {
    method:"POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
      body:JSON.stringify({
        text:slackMessage
      })
    }).then(response => response.json())
      .then(data => {
        console.log('Dados recebidos:', data);
        // faz alguma coisa com os dados aqui
    })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
    });
}