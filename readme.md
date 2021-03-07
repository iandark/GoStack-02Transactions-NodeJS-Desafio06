# Aplicação de gestão de transações
Aplicação em NodeJS com banco postgres e upload de planilha CSV utilizando Multer, para lançamento de ativos e passivos.

Link para o desafio original: [https://github.com/rocketseat-education/bootcamp-gostack-desafios/tree/master/desafio-database-upload](https://github.com/rocketseat-education/bootcamp-gostack-desafios/tree/master/desafio-database-upload)

Aplicação (Heroku): [https://gostack-transactions-nodejs.herokuapp.com/](https://gostack-transactions-nodejs.herokuapp.com/)

Collection (Postman): [https://github.com/iandark/Postman-JSON/blob/master/GoFinances/GoFinances.postman_collection.json](https://github.com/iandark/Postman-JSON/blob/master/GoFinances/GoFinances.postman_collection.json)

<br>

## Scripts disponíveis

Neste projeto você pode executar:

| Comando                            | Descrição                                                                              |
| ---------------------------------- | -------------------------------------------------------------------------------------- |
| `npm install`                      | Instala as dependências contidas no arquivo package.json para o diretório node_modules |
| `npm run build`                    | Gera os arquivos necessários para modo produção                                        |
| `npm run dev:server`               | Inicia a aplicação em modo desenvolvimento                                             |
| `npm run typeorm migration:run`    | Executa todas as migrations de banco de dados                                          |
| `npm run typeorm migration:revert` | Reverte a última migration executada                                                   |

<br>

## Solução para possíveis erros

> **error:** database "gostack_desafio06" does not exist
>
> > **Solução**
> > Crie o BD "gostack_desafio06"

<br>

> **Error:** connect EHOSTUNREACH
>
> > **Solução**
> > Altere o arquivo ormconfig.json com o host, usuário e senha do seu servidor postgres
