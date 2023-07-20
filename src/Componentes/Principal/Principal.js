

const Principal = () => {
    return (
    <>
        <div className='main'>
            <section className='apresentaçao'>

                <h1 id='titulo'>Eleve seu negócio digital a outro nível <strong id="titulo-destaque">com um dev Web de qualidade!</strong></h1>

                <p className='conteudo-texto'>Olá! Sou Guilherme Fontes, desenvolvedor Front-end com conhecimentos em React, HTML, CSS e JS. Ajudo pequenos negócios e designers a colocarem em prática boas ideias. Vamos conversar?</p>

                <div id='redes' href='#About'>

                    <h2 id='titulo-redes'>Acesse minhas redes</h2>

                    <a href='https://github.com/gui2310g' target='_blank' rel="noopener noreferrer">
                        <img className='icons' src='./imagens/github.png' alt='foto do Github' />
                        <span>Github</span>
                    </a>

                    <a href='https://www.instagram.com/guilhermefontess/' target='_blank' rel="noopener noreferrer">
                        <img className='icons' src='./imagens/instagram.png' alt='foto do Instagram' />
                        <span>instagram</span>
                    </a>

                    <a href='https://www.linkedin.com/in/guilherme-campo-873890255/' target='_blank' rel="noopener noreferrer">
                        <img className='icons' src='./imagens/linkedin.png' alt='foto do Linkedin' />
                        <span>Linkedin</span>
                    </a> 
                </div>      
                
            </section>  

            <img className='foto-destaque' src='/imagens/foto.jpg' alt='foto de Guilherme Fontes' />   
             
        </div>  
    </>
    )
}

export default Principal;