const sobre = document.querySelector("#about");

async function getApiGithub(){
    try{
        const dadosPerfil = await fetch('https://api.github.com/users/Geana-Almeida')
        const perfil = await dadosPerfil.json();

        let conteudo = `
        
            <img src="${perfil.avatar_url}" alt="Foto do Perfil do Github" ${perfil.name}>

            <!-- Texto Sobre você -->
            <article id="sobre_texto" class="about-sobre">

                <h1>Sobre mim</h1>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quibusdam odit voluptates incidunt inventore rem error harum
                    blanditiis accusamus vitae, minus fugit consequatur?
                    Dolorum maiores magni deleniti modi sit laudantium totam!
                </p>

                <!-- Informações do Github -->
                <div id="sobre_github" class="sobre_github">

                    <a target="_blank" href=${perfil.html_url}>Github</a>
                    <p>${perfil.followers}</p>
                    <p>${perfil.public_repos}</p>

                </div>

            </article>
`
        sobre.innerHTML = conteudo;
    }catch(error){
        console.log(error)
    }
}

getApiGithub();