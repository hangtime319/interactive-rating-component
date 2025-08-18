# Componente de Avaliação Interativo

Um componente de avaliação interativo e responsivo, estilizado com Tailwind CSS e alimentado por JavaScript.

## Descrição

Este projeto é uma solução para o desafio "Componente de avaliação interativo" do Frontend Mentor. O objetivo principal foi construir um componente pequeno e funcional com dois estados: um estado de seleção de avaliação e um estado de "obrigado" que aparece após a submissão. Este projeto é um excelente exemplo de como usar o **Tailwind CSS** para uma estilização limpa e moderna e o **JavaScript** para lidar com todas as interações do usuário e mudanças de estado dinâmicas.

## Tecnologias Usadas

* **HTML5:** Para criar a estrutura semântica do cartão de avaliação e seus diferentes elementos.
* **Tailwind CSS:** Usado para toda a estilização, incluindo o layout, tipografia, cores e design responsivo. As classes de utilidade do Tailwind tornaram rápido o processo de estilizar tanto o estado inicial quanto o estado de "obrigado".
* **JavaScript:** Esta é a tecnologia-chave que lida com a interatividade do componente. Ele escuta os cliques do usuário nos números de avaliação, gerencia o destaque da avaliação selecionada, lida com o clique do botão "Submeter" e alterna dinamicamente a visualização entre os estados de avaliação e de "obrigado".

## Instalação

Este é um projeto de frontend estático, então não é necessária uma configuração complexa. O CSS do Tailwind já está compilado. Para obter uma cópia local, basta seguir estes passos:

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/hangtime319/interactive-rating-component.git](https://github.com/hangtime319/interactive-rating-component.git)
    ```
2.  Abra o arquivo `index.html` no seu navegador da web preferido para visualizar o projeto.

## Uso

Este projeto serve como uma vitrine de um componente de UI prático e interativo. O usuário pode:
* Selecionar uma avaliação de 1 a 5.
* Clicar no botão "Submeter".
* Ver a visualização mudar para um cartão de "obrigado" que exibe a avaliação selecionada.

## Funcionalidades

* **UI de Dois Estados:** O componente faz uma transição perfeita entre a visualização de avaliação e a visualização de "obrigado".
* **Avaliações Interativas:** Os usuários podem clicar para selecionar uma avaliação, e o número escolhido é destacado.
* **Conteúdo Dinâmico:** A mensagem de "obrigado" exibe dinamicamente a avaliação que o usuário selecionou.
* **Totalmente Responsivo:** O cartão é estilizado para ser totalmente responsivo, ficando ótimo em todos os tamanhos de tela.

## Contribuição

Contribuições são bem-vindas! Se você gostaria de melhorar este projeto, por favor, siga estes passos:

1.  Faça um "fork" do repositório.
2.  Crie uma nova branch (`git checkout -b feature/sua-nova-funcionalidade`).
3.  Faça o "commit" de suas alterações (`git commit -m 'feat: Adiciona uma nova funcionalidade'`).
4.  Faça o "push" para a sua branch (`git push origin feature/sua-nova-funcionalidade`).
5.  Abra um "Pull Request".

## Licença

Este projeto está licenciado sob a Licença MIT.
