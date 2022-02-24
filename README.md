
# Projeto Galeria  

[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/PSONetto/projeto-galeria) [![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com) [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)  

Uma galeria de fotos que possui um filtro que mostrará fotos de uma cidade escolhida.  
O projeto integra as tecnologias de ***Bootstrap***, ***jQuery*** e ***Webpack***, para propósitos de estudo.  
Este projeto foi realizado como parte do [Curso Web Moderno Completo com JavaScript 2021 + Projetos](https://www.cod3r.com.br/courses/web-moderno).  

## Relatório  
Este projeto teve como base o template [Album Example](https://getbootstrap.com/docs/5.1/examples/album/#) do _Bootstrap_, customizado e modificado para atender as necessidades do estudo.  
Optou-se por diverger do código escrito durante o curso e utilizar os pacotes mais atualizados do node, como o _jQuery 3.6_ e o _Bootstrap 5_.  
Também optou-se por utilizar uma _inserção dinâmica_ das imagens e dos botões na DOM. A estratégia adotada para tal foi requisitar um _arquivo JSON_ via _ajax_ contendo o nome de cada imagem. Foram criados plugins jQuery para realizar a inserção dos elementos na DOM utilizando-se dos dados recebidos via JSON.  
O maior obstáculo encontrado no decorrer deste projeto foi a _manipulação de elementos/páginas recebidas via ajax_. Esta prática gerou um bug no qual o elemento duplicava-se ao ser carregado na DOM. A solução encontrada está contida no arquivo _ajaxManager.js_.  

## Tecnologias  

Projeto criado utilizando:  

+ ``JavaScript``  
+ ``HTML5``  
+ ``CSS3``  
+ ``SASS``  
+ ``jQuery``  
+ ``Bootstrap``  
+ ``Webpack``  

## Créditos  

[Cod3r: Cursos Online de Tecnologia](https://www.cod3r.com.br/)  
[Pixabay](https://pixabay.com/)  
[freeCodeCamp: How to write a good README file](https://www.freecodecamp.org/news/how-to-write-a-good-readme-file/)  
[Alura: Como escrever um bom README](https://www.alura.com.br/artigos/escrever-bom-readme)  

## Autor   

| [<img src="https://avatars.githubusercontent.com/u/89879197?s=400&u=6e371fd0f1b5b2dc0df1e4212e34f600bc6a209b&v=4" width=115><br><sub>Plínio Netto</sub>](https://github.com/PSONetto) |  
| :---: |  

## Licença  

[ISC](https://choosealicense.com/licenses/isc/)  
[Imagens](https://pixabay.com/service/terms/#license)  