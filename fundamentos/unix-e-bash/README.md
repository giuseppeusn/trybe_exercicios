# Exercícios Unix & Shell

## Parte I - _[Criação de arquivos e diretórios](https://github.com/giuseppeusn/trybe_exercicios/blob/main/fundamentos/unix-e-bash/exercicios/ex-1.sh)_

Dica: para criação de arquivos vazios você pode utilizar o comando touch nome-do-arquivo.extensao.

1. Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado unix_tests e navegue até ele.
2. Crie um arquivo de texto com o nome trybe.txt.
3. Crie uma cópia do arquivo trybe.txt com nome trybe_backup.txt.
4. Renomeie o arquivo trybe.txt.
5. Dentro de unix_tests, crie um novo diretório chamado backup.
6. Mova o arquivo trybe_backup.txt para o diretório backup.
7. Dentro de unix_tests, crie um novo diretório chamado backup2.
8. Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2.
9. Apague a pasta backup;
10. Renomeie a pasta backup2 para backup.
11. Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.
12. Apague o diretório backup.
13. Limpe o terminal.

Para os exercícios 14 e 15, crie, de forma manual na parte gráfica do seu sistema operacional (através do mouse), um arquivo de texto com o conteúdo abaixo, chamado skills.txt:
~~~shell
Copiar
Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL
~~~
14. Mostre na tela as 5 primeiras skills do arquivo skills.txt.
15. Mostre na tela as 4 últimas skills do arquivo skills.txt.
16. Apague todos os arquivos que terminem em.txt.

## Parte II - _[Manipulação & Busca](https://github.com/giuseppeusn/trybe_exercicios/blob/main/fundamentos/unix-e-bash/exercicios/ex-2.sh)_

Na pasta unix_tests, baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl:

~~~shell 
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
~~~

1. Mostre todo o conteúdo do arquivo countries.txt na tela.
2. Mostre o conteúdo de countries.txt, página por página, até encontrar a Zambia.
3. Mostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia.
4. Busque por Brazil no countries.txt.
5. Busque novamente por brazil, mas agora utilizando o lower case.
6. Para os próximos exercícios, crie um novo arquivo chamado phrases.txt e adicione algumas frases à sua escolha. Não precisa criar o arquivo pelo terminal.
7. Busque pelas frases que não contenham a palavra fox.
8. Conte o número de palavras do arquivo phrases.txt.
9. Conte o número de linhas do arquivo phrases.txt.
10. Crie os arquivos empty.tbt e empty.pdf.
11. Liste todos os arquivos do diretório unix_tests.
12. Liste todos os arquivos que terminem com txt.
13. Liste todos os arquivos que terminem com tbt ou txt.
14. Acesse o manual do comando ls.

## Parte III - _[Comandos de Input e Output](https://github.com/giuseppeusn/trybe_exercicios/blob/main/fundamentos/unix-e-bash/exercicios/ex-3.sh)_

1. Navegue até a pasta unix_tests;
2. Crie um arquivo texto pelo terminal com o nome skills2.txt e adicione os valores Internet, Unix e Bash, um em cada linha.
3. Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal. 🤓
4. Conte quantas linhas tem o arquivo skills2.txt.
5. Crie um arquivo chamado top_skills.txt usando o skills2.txt, contendo as 3 primeiras skills em ordem alfabética.
6. Crie um novo arquivo chamado phrases2.txt pelo terminal e adicione algumas frases de sua escolha.
7. Conte o número de linhas que contêm as letras br.
8. Conte o número de linhas que não contêm as letras br.
9. Adicione dois nomes de países ao final do arquivo phrases2.txt.
10. Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt.
11. Ordene o arquivo bunch_of_things.txt.

## Parte IV - _[Permissões](https://github.com/giuseppeusn/trybe_exercicios/blob/main/fundamentos/unix-e-bash/exercicios/ex-4.sh)_

1. Navegue até a pasta unix_tests;
2. Rode o comando ls -l e veja quais as permissões dos arquivos;
3. Mude a permissão do arquivo bunch_of_things.txt para que todos os usuários possam ter acesso à leitura e escrita, e verifique se está correto com o comando ls -l;
4. Tire a permissão de escrita do arquivo bunch_of_things.txt para todos os usuários, verifique se está correto com o comando ls -l;
5. Volte à permissão do arquivo bunch_of_things.txt para a listada inicialmente utilizando o comando chmod 644 bunch_of_things.txt.

## Parte V - _[Processos & Jobs](https://github.com/giuseppeusn/trybe_exercicios/blob/main/fundamentos/unix-e-bash/exercicios/ex-5.sh)_

1. Liste todos os processos;
2. Agora use o comando sleep 30 &;
3. Use a listagem de processos para encontrar o PID do processo que está executando o comando sleep 30 e termine a sua execução (mate o processo);
4. Execute novamente o comando sleep 30, mas agora sem o &. Depois, faça com que ele continue executando em background;
5. Crie um processo em background que rode o comando sleep por 300 segundos.
6. Crie mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectivamente.
7. Verifique que apenas o processo sleep 300 está em execução com o comando jobs. Suspenda a execução desse processo.
8. Retome a execução do processo sleep 100 em background com o comando bg.
9. Termine a execução de todos os processos sleep (mate os processos).

