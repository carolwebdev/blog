import Post from 'post/Post'
import PostList from 'postList/PostList'

const Posts = () => {
  const blogPosts = [
    {
      title: `O que a Programação Funcional pode fazer por você?`,
      body: `Um dos tópicos da programação que se tem falando muito é a Programação Funcional... Algum de vocês devem estar se perguntando, que diabos é isso? Vamos começar esclarecendo algumas coisas então!

      No meio da programação existem três paradigmas mais conhecidos, o primeiro comumente chamado de Programação estruturada. Isso se deve ao fluxo do programa, seguindo um fluxo continuo e ESTRUTURADO. O nosso amigo Cobol é um grande exemplo desse paradigma. Temos também a Programação Orientada a Objetos (POO) que tem como sua premissa a criação de objetos, que contém propriedades (variáveis) e funções (métodos). O funcionamento do programa se dá com base nas iterações entre objetos, que vão chamando e interagindo entre si. O grande representante desse paradigma com certeza é o Java. E não menos importante temos a Programação Funcional. A ideia desse paradigma é trabalhar principalmente com funções. Tudo se resume a funções que podem ser agrupadas ou combinadas para produzir um resultado. Ela se vale de muitos principios matematicos, o que as vezes pode ser complicado de entender. Como exemplo podemos citar o Haskell.

      Essa é uma explicação muito simplificada dos paradigmas, visando mostrar a ideia principal por trás deles, cada um tem um conjunto maior de características e regras que definem ele como um todo. Dito isso podemos voltar ao nosso tópico principal, que é a Programação Funcional!

      Porque ela tem sido tão falada ultimamente?
      Acontece que cada vez mais os hardwares que temos hoje estão se limitando e a evolução está tomando um caminho de multi processamento, ou seja, os computadores cada vez mais estão sendo feitos com múltiplos núcleos de processamento para realizar muitas operações em paralelo. Só que gerenciar esses multi processamentos, também conhecidos como processamento multithread, exige um esforços cada vez maior e é ai que as linguagens funcionais se destacam no cenário atual. Você ganha o processamento multithread de graça!

      "Nossa Angeliski, que mágica é essa?"

      Calma, não é mágica.

      Acontece que muitos dos conceitos que estão definidos dentro do Paradigma Funcional permitem que as linguagens funcionais tenham um comportamento multithread sem muito esforço. Vamos a um exemplo, a Imutabilidade. Um dos conceitos que existe dentro do paradigma funcional é a imutabilidade, ou seja, um dado é criado e nunca mais será mudado até o fim da sua vida, ele é imutável.

      "Mas como pode isso? Eu não posso mudar nada?"

      É um pouco mais complexo que isso, além de existir algumas exceções....

      Pausa Dramática no Texto

      Sim, eu sei que existem muitas lacunas nas coisas que eu estou te dizendo, mas se você é alguém que não entende do que eu estou falando é está lendo isso, explicar essas lacunas vai te deixar completamente perdido. Se você entende, as lacunas já estão preenchidas. Então vamos por partes, eu vou explicar algumas coisas nesse texto e outras mais pra frente, em outros textos.

      Fim da Pausa Dramática

      Voltando a imutabilidade, suponha que você criou uma variável idade com o valor 10. Para todo o sempre a variável idade terá o valor 10. Mas e se eu quiser incrementar esse valor? Então uma nova variável, que pode ter o mesmo nome (para simplificar as coisas), será criada, com o valor 11 por exemplo. A imutabilidade garante que você pode usar essa variável em milhões de processamentos paralelos e que o valor será imutável. Se fosse no Java por exemplo, você teria que usar mecanismos de sincronização para que essa variável pudesse ser compartilhada em muitas threads sem nenhum problemas. Consegue enxergar a vantagem? Como a imutabilidade já faz parte do paradigma funcional você não precisa se preocupar com nada disso. Maravilha né?

      Além disso, uma das coisas boas sobre aprender o paradigma funcional é a chance de pensar fora da caixa. Quando você aprende um novo paradigma, seja ele estruturado, orientado a objetos ou qualquer outra coisa, sua mente precisa pensar de uma maneira completamente diferente para resolver os mesmos problemas. Isso te permite crescer e aprender novas estratégias para resolução de problemas, novas ferramentas. Como programador você deve deixar de lado a bala de prata, cada caso tem uma solução mais adequada, hoje pode ser estruturada (Cobol vive até hoje nos bancos), amanhã pode ser programação funcional (Clojure é a linguagem principal da Nubank).

      Você deve estar se perguntando se eu domino a Programação Funcional e a resposta é... não.

      "O.o Mas como pode? Se faz maior propagando do negocio e não entende?"

      Eu disse que não domino. Atualmente estou estudando sobre o assunto e por isso vim compartilhar a minha visão do porque aprender isso, mais pra frente vou tentar trazer alguns exemplos práticos.`,
      author: `Rogério Angeliski`,
      imgUrl: `https://www.alura.com.br/artigos/assets/programacao-funcional-o-q-e/imagem2.jpg`,
    },
    {
      title: `Comunidades na Área de Tecnologia`,
      body: `Quando entramos na área da tecnologia é como se estivéssemos descobrindo um mundo completamente novo. E, nessa caminhada, você pode se sentir só e sem rumo. Então, para lhe mostrar que não tem apenas você nessa jornada, vou trazer nesse artigo algumas comunidades de front-end para que possa conhecer e fazer parte.

      O que é uma comunidade?
      Comunidade é um grupo de pessoas que se reúnem para trocar ideias, dividir experiências e criar eventos (como palestras e workshops, que podem ser presenciais ou on-line). Nesses grupos, diversos temas são debatidos, principalmente sobre as principais demandas do mercado e as tendências da atualidade.

      Esses espaços são conhecidos por oferecerem bastante suporte, o que é incrível para quem está começando agora na carreira de dev. Neles, você encontrará desde as pessoas iniciantes até as mais experientes e todas estão dispostas a ajudar com qualquer dúvida. O fato é que uma pessoa antes de você já pode ter tido perguntas semelhantes às suas e, nesses grupos, você pode encontrar a solução rapidamente.

      Além disso, você pode se manter informado sobre as boas práticas, novidades, receber feedbacks, conhecer pessoas novas e se conectar com elas. Aliás, fazer networking é importante em qualquer área, pois, ao se conectar com diferentes tipos de pessoas, você não cresce apenas profissionalmente, mas como indivíduo também.

      Há muitas comunidades para pessoas desenvolvedoras por aí. Por isso,nesse artigo, irei trazer as principais comunidades voltadas para o Front-end. Vamos lá?

      Comunidades do Front-end para fazer parte
      Stack Overflow
      Uma imagem que mostra a página inicial do stack overflow.

      O Stack Overflow é um site de perguntas e respostas dedicado a pessoas que já programam ou que querem aprender a programar. A comunidade responde e faz perguntas constantemente, e as pessoas usuárias votam nas melhores para que elas subam no feed e sejam encontradas com mais facilidade. Existem muitas perguntas em inglês, mas, se você quiser, pode ir até a parte que está tudo em português. Legal, né?

      Você também ganha reputação quando vota nas suas perguntas e respostas. Em níveis mais altos, você ganha privilégios como a permissão de moderação e passa a ajudar a manter a qualidade do site e da comunidade.

      GitHub
      Uma imagem que mostra a página inicial do front-end br.

      O GitHub é uma plataforma onde você compartilha seu código e arquivos com controle de versão usando o Git. Ele é como uma rede social para pessoas que programam. Assim, você pode seguir pessoas, trocar mensagens e contribuir em projetos privados ou Open Source.

      Apesar do GitHub ter muitas trocas em inglês, vou trazer aqui uma opção maravilhosa em português.

      Na plataforma existe um fórum incrível chamado Front-end Brasil. Ele foi criado com o objetivo de reunir dúvidas vindas de outras redes sociais, como Facebook, mas que acabavam perdidas depois de um tempo. Ou seja, as pessoas criadoras deste espaço queriam unificar todas as discussões em um só local e escolheram, justamente, o GitHub por ser mais fácil de encontrar dúvidas antigas.

      Na página principal tem o link que te leva para o fórum, outro para divulgação de vagas na área de Front-end e o terceiro link vai para a parte de eventos. O mais legal é que qualquer pessoa pode adicionar uma vaga, criar um evento ou dar sugestões, desde que esteja dentro das diretrizes do site, claro.

      MDN Web Docs
      Uma imagem que mostra a página inicial do mdn.

      O MDN Web Docs é um projeto colaborativo open source que documenta tecnologias de plataforma da Web, como HTML, CSS, JavaScript e APIs da Web. Eles também fornecem uma grande coleção de recursos aprendizagem para devs e estudantes iniciantes, como uma trilha de estudos para desenvolvimento front-end, que você pode acessar em inglês ou português. Top, né?

      Nessa área, o MDN se propõe a levar você de iniciante a confortável, para que, a partir desse conhecimento básico, você trilhe seu caminho no mundo da programação. E caso você tenha dúvidas ou fique preso em um problema, eles também disponibilizam um fórum para que você poste sua pergunta e outras pessoas possam te ajudar.

      Coderwall
      Uma imagem que mostra a página inicial do coderwall.

      O Coderwall é uma comunidade de devs para aprender e compartilhar dicas de programação. Há uma seção de dicas específicas para ajudar a resolver problemas ou aprender coisas novas, separadas por tags. Você pode pesquisar “front-end”, por exemplo, e irá encontrar tudo relacionado ao assunto.

      Além de existir muitos recursos para iniciantes e devs mais experientes, também há áreas exclusivas para dicas de JavaScript, CSS, HTML, Python, Ruby, iOS e vários outros assuntos, em que você tem total liberdade para perguntar ou postar dicas.

      Um ponto importante é que a maior parte do conteúdo é em inglês, mas isso não precisa ser um empecilho, pois você pode usar o recurso de tradução caso queira, como o Google Tradutor ou o DeepL.

      WoMakersCode
      Uma imagem que mostra a página inicial do womakerscode.

      A WoMakersCode tem a missão de inspirar e impulsionar meninas e mulheres que desejam ingressar ou se especializar em carreiras ligadas à tecnologia e inovação. Dessa forma, é uma organização que cria várias iniciativas de capacitação, mentoria, empregabilidade e conteúdos digitais. Ou seja, você mulher que se sente sozinha nessa área, onde os homens ainda são maioria, tem a possibilidade de se conectar com outras mulheres e aprender muito com elas.

      A organização também disponibiliza várias palestras, workshops e feira de vagas que você pode se inscrever através desse link de forma online e gratuita. E olha só que demais: se quiser, você pode se inscrever para ser palestrante voluntária.

      She's Tech
      Uma imagem que mostra a página inicial do she’s tech.

      A She’s Tech tem três pilares: inspirar, engajar e capacitar. Ela atua pela conscientização do mercado sobre a diversidade, inclusão e estimula a auto-aceleração através da liderança e protagonismo.

      Além disso, por meio dela, diversos eventos online e gratuitos são promovidos, onde outras mulheres que já estão atuando na área da tecnologia repassam o que aprenderam durante a vida. Essa comunidade também possui um grupo no telegram para postar e compartilhar oportunidades de trabalho, eventos e cursos para mulheres.

      Minas Programam
      Uma imagem que mostra a página inicial do minas programam.

      O Minas Programam foi criado para desafiar a influência dos estereótipos de gênero e de raça na relação de mulheres com as áreas de ciências, tecnologia e computação, de acordo com as criadoras.

      É um projeto que dá oportunidades de aprendizado sobre programação para meninas e mulheres (cis ou trans) e pessoas não-binárias, especialmente aquelas que são negras ou indígenas, por meio de cursos gratuitos, dicas de livros, oficinas e apoio para as futuras devs que não têm um computador para começar a programar.

      Comunidades Tech
      Uma imagem que mostra a página inicial do Comunidades Tech

      O Comunidades Tech é um projeto open source, onde você pode pesquisar por vários grupos de tecnologia e filtrar por: categoria, tipo, cidade, país, nome da comunidade, entre outros. Após escolher qual você quer participar, é só clicar para encontrar os links de entrada do grupo, que podem ser no discord, facebook, slack, meetup, telegram, whatsapp e até em podcast.

      Você também pode criar seu próprio grupo e cadastrar lá para que outras pessoas encontrem e sua comunidade cresça.

      Conclusão
      Muito legal né? E você, já participa de comunidades?

      Sempre há novidades no mundo da programação e mergulhar em comunidades é muito importante para o seu desenvolvimento como dev. Se você já participa, usufrua de tudo o que ela tem para oferecer, ajude as pessoas, participe de conversas, vá aos encontros e palestras.

      Lembrando que se você é estudante da Alura temos a nossa própria comunidade no discord, onde você pode pedir ajuda e ajudar várias pessoas. Todas as pessoas estão sempre dispostas a dar aquela dica incrível ou achar o motivo daquele erro que você não consegue encontrar por nada.

      Afinal, ninguém consegue fazer tudo só! Se você ainda não faz parte, venha e se encante.

      Vou deixar aqui o link para o Alura+ do João Manoel sobre a comunidade da Alura no discord, onde ele mostra como você faz para entrar e explica tudo sobre como utilizar esse aplicativo. Caso você não tenha muita familiaridade, indico muito que assista.

      Ah! E se tiver mais dicas de comunidade indique pra gente lá no nosso canal do discord, tenho certeza que todo mundo vai gostar.

      Agora é com você! Pesquise sobre as comunidades e participe das que gostar mais.

      Até breve!`,
      author: `Lorena Garcia`,
      imgUrl: `https://www.alura.com.br/artigos/assets/principais-comunidades-front-end/principais-comunidades-front-end.png`,
    },
    {
      title: `Mande um e-mail para você mesmo (ou para alguém) e receba daqui a 10 anos`,
      body: `Como você se imagina daqui a 10 anos? E que mensagem você escreveria — para você mesmo ou para alguém querido — para colocar em uma cápsula do tempo?

      Pensando em perguntas como essas, o Sitegeist2022 — uma brincadeira com “zeitgeist”, expressão alemã que pode ser traduzida como “sentimento de época”, ou “sinal dos tempos” — propõe uma brincadeira curiosa. Ele permite que você envie um e-mail para si mesmo ou para outra pessoa, que só será recebido após uma década.

      Ficou em dúvida sobre o que escrever? Aí vão algumas sugestões de mensagens: em 2032 teremos os Jogos Olímpicos na Austrália. Uma boa pode ser perguntar sobre o cenário esportivo atual, por exemplo. Quais são as revelações em cada modalidade? O Brasil está mais bem colocado no quadro de medalhas?

      Como anda o cenário político? O mundo está pensando mais na questão ambiental (provavelmente não)? Que tipo de música domina o streaming — ou qualquer outra tecnologia que existir na época?

      Se pensa em ter um filho até lá, escreva para ele sobre suas expectativas em relação a ele. Vale falar com o seu “futuro eu” sobre como está a sua vida atual, por exemplo.

      Você provavelmente esquecerá desse e-mail quando ele finalmente chegar, o que deixa tudo mais legal. Afinal, quando você do futuro receber a mensagem, provavelmente terá uma sensação de nostalgia.

      O site é bem fácil de navegar, não existe segredo. É só colocar o nome, e-mail e escrever a suas mensagem.

      Apesar de interessante, a iniciativa não é inédita. Lançado em 2002, o site chamado Future Me fez sucesso e protagonizou o envio de mais de 10 milhões de mensagens. A proposta era a mesma.

      Que tal escrever sua carta para o futuro agora mesmo? `,
      author: `Nubia da Cruz`,
      imgUrl: `https://i0.wp.com/gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2022/07/letter-g51cc6c00f_1280.jpg?resize=800%2C533&ssl=1`,
    },
    {
      title: `Pair Programming: como obter os melhores resultados`,
      body: `Se você trabalha na área de tecnologia, provavelmente já ouviu falar do termo “pair programming”. Essa é uma técnica largamente utilizada e toda pessoa programadora que usa tem uma opinião a respeito: ou ama, ou odeia. Porém, como em tudo na vida, é sempre bom olhar os dois lados. Por isso, continue lendo para descobrir as vantagens do pair programming e em quais cenários é melhor trabalhar sozinho.

      Serão elencadas, também, as boas práticas, para que você não irrite seu coleguinha e nem passe raiva ao trabalhar em dupla.

      O pessoal da RD Station, empresa de tecnologia situada em Floripa, está super acostumado a trabalhar em pares e deram algumas dicas valiosas para que você saiba definir com mais clareza quando usar essa técnica ou não, da maneira mais proveitosa e menos custosa possível.

      Por que fazer pair?
      Aumenta o comprometimento com as tarefas. O trabalho em conjunto gera o sentimento de comprometimento e melhora o rendimento dos integrantes da dupla. Se você tem um horário marcado com o parceiro, fica mais difícil procrastinar.

      Promove o compartilhamento de conhecimento. Pessoas diferentes possuem conhecimentos distintos que podem ser compartilhados, principalmente se as duplas forem revezadas com frequência, gerando um aprendizado mútuo e contínuo.

      Melhora a qualidade de códigos, correção de falhas e velocidade na codificação. O código é feito e revisado constantemente pela dupla, tornando as soluções mais simples e limpas. Isso porque sempre vai ter uma pessoa como piloto, comandando e digitando o código, e o copiloto, que faz a revisão. Assim, as falhas e erros são identificados mais cedo e de maneira mais fluida, evitando o longo período que seria gasto para a pessoa programadora procurar problemas ou debugar o código para encontrar defeitos sozinha, tornando assim a codificação mais rápida.

      Fortalece a união do time. A técnica de pair demanda a troca periódica dos pares, para que todos os integrantes da equipe compartilhem o conhecimento adquirido e participem de toda a elaboração do código. Isso fortalece o senso de coletividade, o trabalho em equipe e possibilita que os participantes se conheçam melhor. Equipes com a sinergia fortalecida geram mais resultados positivos para a empresa.

      Em quais cenários o pair não funciona tão bem?
      Quando as pausas e um limite de carga horária diária não são respeitadas. Durante o pair, lembre-se que seu colega talvez não a mesma energia que você, ou pode ser que ele perca o foco durante uma sessão muito longa. Por outro lado, não é recomendável fazer pausas ou trocas de pessoa piloto após um período muito curto (poucos minutos), pois pode levar um tempo até que o novo piloto se situe e comece, de fato, a produzir. Para aumentar a produtividade, também é indicado que a técnica não seja utilizada por muitas horas no mesmo dia.

      Quando o prazo para entregar as tarefas é curto e as demandas são simples, menores e/ou rotineiras. Nessas situações, pode ser mais eficiente separar as pessoas desenvolvedoras para que possam trabalhar individualmente em tarefas distintas.

      Quando seu par se repete com muita frequência. Isto pode gerar um nivelamento de conhecimentos técnicos e um excesso de confiança no trabalho do outro, levando a uma redução gradativa das interações. Esse cenário poderia afetar algumas das grandes vantagens do pair em termos de compartilhamento de conhecimentos e de aumento na qualidade do código.

      Quando uma das partes não se sente confortável para a prática do pair naquele momento. Para que o pair programming possa ser benéfico é fundamental que ambas as partes tenham vontade de codar em conjunto. Em alguns momentos, você pode simplesmente preferir trabalhar em suas próprias ideias e ficar mais introspectivo. Se não estiver no clima naquele momento para trabalhar com seu parceiro, deixe pra próxima.

      Quando as agendas de ambos os programadores não batem. O pair programming exige que os trabalhos sejam realizados de forma síncrona e, hoje em dia, com a expansão do trabalho remoto, muitas vezes as pessoas programadoras podem fazer sua própria agenda e trabalhar nos horários em que se sentem mais produtivas. Nos casos em que não há tanta flexibilidade de agenda, a prática do pair pode não ser a mais eficiente.

      Quais as boas práticas no pair sob o olhar dos RDoers?
      Alinhamento entre a dupla é essencial. Antes de tudo, é importante ter em mente que as pessoas têm experiências diferentes, por isso é essencial ter uma boa comunicação entre a dupla para que as expectativas estejam alinhadas, a fim de minimizar eventuais conflitos durante a prática de pair programming. A dica aqui é: no primeiro contato com sua dupla, tenha um diálogo aberto sobre seus limites, o que você espera da outra pessoa e lembre-se de perguntar também o que o outro espera de você, assim vocês entrarão nessa jornada se conhecendo mais. Esse momento também é importante para alinhar os resultados que ambos buscam atingir e, assim, evitar o retrabalho. Enquanto a outra pessoa pilota, dê a ela a autonomia de escrever os códigos do seu jeito e se limite a fazer intervenções apenas quando forem realmente necessárias. Mostre que você valoriza o esforço do seu colega e construa feedbacks assertivos quando for necessário.

      Esteja aberto a novos aprendizados. A prática visa à troca de conhecimento entre os pares e garante a qualidade da entrega, já que “duas cabeças juntas pensam melhor que uma”. Por isso é importante para a prática a junção de pessoas de diferentes níveis de conhecimento, que ficarão intercalando suas posições como pessoa piloto e pessoa copiloto, de acordo com o combinado entre a própria dupla. Na RD Station, esta escolha é bem livre para que os RDoers fiquem à vontade para fazer seus próprios acordos, já que cada pessoa é única e nem tudo que funciona para um vai funcionar para o outro. Tenha em mente que fazer o pair programming significa chegar em soluções em conjunto. Por isso, estes alinhamentos são importantes para que, juntos, vocês possam encontrar um ponto de equilíbrio no qual ambos aprendam e evoluam em questões técnicas e/ou soft skills.

      Cuide da sua saúde e da saúde do seu par. Para que o pair programming seja uma prática frequente, é necessário respeitar os indivíduos, fazendo pausas durante a jornada de trabalho. Desta forma, este momento de compartilhar conhecimentos não fica exaustivo. Os intervalos também devem ser acordados entre os integrantes da dupla para que ambos façam o melhor proveito.

      Fique atento à hora de trocar os papéis. Na prática, alguns times optam por deixar que a pessoa piloto esteja em ação até a solução de uma determinada parte do projeto, então ocorre a troca de papéis entre a dupla até a solução final. Também é comum que se definam períodos de tempo utilizando a técnica pomodoro, na qual cada pessoa desenvolvedora faz o papel de piloto/copiloto por cerca de 25 minutos, depois invertem-se os papéis considerando as pausas para descanso até que a entrega final ocorra. Essas boas práticas são importantes para manter o padrão e a excelência no código, além de possibilitar a continuidade do projeto na ausência de um dos integrantes do pair.

      A cultura de pair programming é muito bem recebida e elogiada pelos RDoers:

      Fica evidente, portanto, que na RD Station, embora não existam regras determinando a realização de pair, as pessoas desenvolvedoras tendem a utilizar essa técnica porque as vantagens se sobrepõem às desvantagens, e todo mundo sai ganhando.`,
      author: `Ana Carolina de Araujo, Cristhyane Araldi, Giovanna Alyssa, Isadora Caprini, Lia Farias, Renata Matsumoto, Sarah Nani, Stefanny Ferreira e Thais Santiago`,
      imgUrl: `https://miro.medium.com/max/1400/1*RmwWDs4CrzyEeWKJRY7K0Q.png`,
    },
  ]

  return (
    <div>
      {blogPosts.map((post, index) => (
        <PostList {...post} />
      ))}
    </div>
  )
}

export default Posts
