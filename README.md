<h1 align="center">NodeJS Process Queue</h1>

<div align="center">
<a href="#description">Description</a>
<a href="#packages">Packages</a>
<a href="#usage">Usage</a>
<a href="#exam">Exam</a>
<a href="#license">License</a>
</div>

<h2 id="description">📚 Description</h2>
NodeJs Typescript API using bull, Docker Compose and Redis for make async queue process

<h2 id="packages">📦 Packages</h2>
Main libraries: bull, typeorm, express, dotenv, axios

<h2 id="usage">🚀 Usage</h2>

Run command: `docker compose up`

The project is going to run on localhost:5000 by default

You can acess a dashboard from bull board on localhost:5000/admin/queues, get users on localhost:5000/v1/users and get products on localhost:5000/v1/products

<h2 id="exam"><img src="https://www.webfx.com/wp-content/themes/fx/assets/img/tools/emoji-cheat-sheet/graphics/emojis/memo.png" width="25"/> Exam</h2>

<p>"""Olá! Você foi selecionado(a) para a próxima etapa do Processo Seletivo para Estagiário em Desenvolvimento na FlyOn Marketing Digital. Parabéns!

Devido a reorganizações internas, nossa seleção agora será para a área de Backend, e não mais Frontend conforme anunciado anteriormente. Ainda assim, contamos com a sua candidatura para o nosso recrutamento.

A próxima etapa consiste em um case técnico, de acordo com as instruções:
Implementar um serviço de extração de dados em NodeJS que consulta dados da API pública https://fakestoreapi.com/docs e salva em um banco de dados MySQL. Devem ser consultados dados de Produtos e Usuários.
O processo de extração e armazenamento dos dados deve ocorrer através de um job executado em background. Para isso pode ser utilizada bibliotecas de gerenciamento e execução de jobs assíncronos e filas de mensagem (ex: BullMQ).
Também podem ser utilizados pacotes ORM (Object-relational Mappers) para a definição do esquema do banco de dados e manipulação do mesmo.
Os dados devem ser extraídos de maneira recorrente, ou seja, ao menos uma vez ao dia e os dados devem ser inseridos no banco quando não existirem previamente, ou atualizados caso existam, simulando um ambiente de extração real onde novos dados surgem com o tempo. (Esta etapa deve ser realizada mesmo que a API fornecida não apresente novos dados com o tempo).

Devem ser entregues todos os arquivos necessários para instalação de dependências do projeto, bem como para sua execução, em um arquivo compactado (.zip), para este mesmo e-mail. Fica a critério do candidato a utilização de containers (Docker) para a execução de possíveis pacotes de software que sejam necessários para o funcionamento do projeto, sendo necessário a entrega do arquivo docker-compose.yml para a criação dos containers.

O prazo para a entrega é até sexta-feira (dia 02/09), ao meio-dia. Não serão aceitos envio após esta data e horário.

Boa sorte e até mais!
Atenciosamente,

Equipe FlyOn.

Por gentileza, confirme o recebimento deste email."""</p>

<h2 id="license">🚀 License</h2>

[MIT](https://choosealicense.com/licenses/mit/)
