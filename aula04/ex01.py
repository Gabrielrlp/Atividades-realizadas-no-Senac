nome = input('Digite seu nome: ')
nota1 = float(input('Digite sua nota do primeiro Bimestre: '))
nota2 = float(input('Digite sua nota do segundo Bimestre: '))
nota3 = float(input('Digite sua nota do terceiro Bimestre: '))
nota4 = float(input('Digite sua nota do quarto Bimestre: '))

soma = nota1 + nota2 + nota3 + nota4
media = soma / 4

if(media >= 15 ):
    situacao = ('Aprovado')

else:
    situacao = ('Reprovado')

print('Aluno: ', nome)
print('Média: ', media)
print('Situação: ', situacao)