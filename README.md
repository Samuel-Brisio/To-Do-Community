<h1 align="center"> VIPList - Lista Comunitária de Compras </h1>

Lista comunitário de compras oferencendo ao usuario a opurtunidade de criar listas personalizadas, 
cada lista poderá ter um grupo de integrantes diferentes e será compostas por itens que irão conter o nome do produto, quantidade e que poderação ser marcados como comprados.


## Funcionalidades

* Cada integrante de uma lista poderá realizar as seguintes ações na Lista:
  - Adicionar e Remover Itens
  - Exemplificar o produto a ser comprados com fotos
  - Marcar o produto como comprado

* Cada usuario do sistema poderá realizar as seguintes ações adicionais:
  - Gerenciamento de lista (Criar e deletar)
  - Realizar o Cadastro e Login no sistema

<!-- Outras funcionalidade presentes no site será o histórico de compras, o usuário irá poder gerar relátorios sobre os gastos realizados -->

## Tecnologias

O Desenvolvimento do projeto utilizará as seguintes tecnologias 
  * FrontEnd -> React
  * BackEnd -> Node.js
  * Database -> Express

## Integrantes

<table>
 <tr>
   <th>Matricula</th>
   <th>Nome</th>
   <th>Função</th>
 </tr>
 <tr>
  <td>2020006973</td>
  <td>Raphaela Maria Costa e Silva</td>
  <td>FullStack</td>
 </tr>
 <tr>
  <td>2020007090</td>
  <td>Victor Kenji Pawlowski Abeki</td>
  <td>FullStack</td>
 </tr>
 <tr>
  <td>2014113810</td>
  <td>Deborah Santos Andrade Guimarães</td>
  <td>FullStack</td>
 </tr>
 <tr>
  <td>2020085547</td>
  <td>Samuel Brísio de Jesus</td>
  <td>FullStack</td>
 </tr>
</table> 

# Backlog do produto

## Histórias de usuário pincipais

1. Como usuário, gostaria de criar uma lista
2. Como usuário, gostaria de deletar uma lista
3. Como usuário, gostaria de criar um item para a lista
    1. Como usuário, gostaria de escrever um nome para o item
4. Como usuário, gostaria de deletar um item da lista
5. Como usuário, gostaria de riscar um item da lista
6. Como usuário, gostaria de fazer login na minha conta do VIPList

## Histórias de usuário secundárias

1. Como usuário, gostaria de cadastrar novos membros no meu grupo do VIPList
2. Como usuário, gostaria de editar um item da lista
    1. Como usuário, gostaria de acessar um botão dropdown em uma tarefa com diversas opções de edição
3. Como usuário, gostaria de anexar uma foto a um item da minha lista
4. Como usuário, gostaria de adicionar uma data limite para uma lista
5. Como usuário, gostaria de receber uma notificação por e-mail quando a data limite para uma lista está chegando
6. Como usuário, gostaria de obter um arquivo de compra ao checar vários itens de uma vez
7. Como usuário, gostaria de adicionar o valor pago à minha lista arquivo ao terminar uma compra
8. Como usuário, gostaria de adicionar um local à minha lista arquivo ao terminar uma compra

## Histórias épicas

1. Como usuário, gostaria de ter um sistema de controle de gastos.
    1. O valor de cada compra é armazenada depois que vários itens são descartados.
    2. Os valores gastos são armazenados e organizados em ordem cronológica
    3. Os valores gastos são apresentados visualmente em forma de gráficos
    4. A representação visual mostra também os locais onde as compras foram feitas.
    5. Os valores podem ser obtidos diretamente do recibo da compra através da câmera do celular
2. Como usuário, gostaria que itens recorrentes fossem adicionados automaticamente às minhas listas de compras
    1. O usuário define listas fixas, como listas de compra de supermercado
    2. O sistema identifica automaticamente quais itens são comprados com frequência
    3. O sistema adiciona itens recorrentes com base na frequência identificada
    4. O sistema manda notificações para o usuário quando um item recorrente não foi comprado há muito tempo.

# Sprint Backlog
## História #1: Como usuário, gostaria de criar uma lista

- Tarefas e responsáveis:
    - Instalar banco de dados e criar primeiras tabelas [Raphaela]
    - Instalar framework de backend [Samuel]
    - Instalar framework de frontend (node e React) [Deborah]
    - Esboçar visual da aplicação [Todos]
    - Implementar interface visual da página inicial [Victor e Deborah]
    - Implementar a visão de lista [frontend]
    - Definir método de interface entre front e back end [Raphaela e Victor]
    - Criar e testar uma primeira rota de criação de lista [Raphaela]

## História #2: Como usuário, gostaria de deletar uma lista

- Tarefas e responsáveis:
    - Implementar métodos para deletar uma lista [Raphaela]
    - Implementar os "botões" para selecionar uma lista e deletá-la [Victor]
    - Definir método de interface entre front e back end [Raphaela e Victor]
    - Criar e testar uma rota para deletar uma lista [Raphaela]

## História #3: Como usuário, gostaria de criar um item para a lista

- Tarefas e responsáveis:
    - Selecionar e implementar uma estrutura de dados para a classe Item [Samuel]
    - Implementar a visão de um item [Deborah]
    - Criar interface de usuário para escrever o nome do item [Deborah]
    - Definir método de interface entre front e back end [Samuel e Deborah]
    - Criar e testar uma rota de criação do item [Samuel]

## História #4: Como usuário, gostaria de deletar um item da lista

- Tarefas e responsáveis:
    - Implementar métodos para deletar um item [Samuel]
    - Implementar os "botões" para selecionar um item e deletá-lo [Deborah]
    - Definir método de interface entre front e back end  [Samuel e Deborah]
    - Criar e testar uma rota para deletar um item [Samuel]

## História #5: Como usuário, gostaria de riscar um item da lista

- Tarefas e responsáveis:
    - Definir e implementar a estrutura e comportamento de um item arquivado [Raphaela]
    - Implementar na interface de usuário a ação de riscar o nome de um item e checar uma caixa [Victor]
    - Implementar na interface de usuário a posição de itens checados em uma lista [Victor]
    - Definir método de interface entre front e back end [Raphaela e Victor]
    - Criar e testar uma rota para checar uma lista [Raphaela]

## História #6:

- Tarefas e responsáveis: Como usuário, gostaria de fazer login na minha conta do VIPList
    - Definir uma base de dados de usuários de uma lista [Samuel]
    - Implementar a visão de uma tela de login [Victor]
    - Implementar o input do nome de usuário e da senha [Deborah]
    - Definir método de interface entre front e back end [Deborah, Raphaela]
    - Criar e testar uma rota de login de um usuário [Raphaela]
