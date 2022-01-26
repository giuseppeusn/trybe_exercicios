#Exercicio 1

cd unix_tests/

#Exercicio 2

touch skills2.txt
Internet
Unix
Bash

#Exercicio 3

cat >> skills2.txt 
HTML
CSS
JavaScript
React
Node.js

sort skills2.txt 

#Exercicio 4

wc -l skills2.txt 

#Exercicio 5

cat skills2.txt | sort | head -3 > top_skills.txt

#Exercicio 6

cat > phrases2.txt
Outras frases
totalmente aleatórias
Tres
Dois 
Um

#Exercicio 7

grep "br" phrases2.txt | wc -l

#Exercicio 8

grep -v "br" phrases2.txt | wc -l

#Exercicio 9

cat >> phrases2.txt 
Brasil
Canada

#Exercicio 10

cat phrases2.txt countries.txt >  bunch_of_things.txt

#Exercicio 11

sort bunch_of_things.txt 

