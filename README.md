# Projeto de Marketing Digital
API para sistema de captação de emails

## Tecnologias
- NodeJS
- NodeMailer
- Postgres
- Knex.js
- Docker e docker-compose

## Esquema do Banco de Dados

`id`  
`email`   
`name`  
`created_at`  

## Rotas

`GET /listar`  
```json
Retorno:
[
  {
    "id": 1,
    "email": "seu-email@email.co",
    "name": "Seu nome",
    "created_at": "2020-10-30T20:02:30.363Z"
  }
]
```

`POST /cadastrar`
```json
Corpo da requisição:
{
    "email": "seu-email@email.com",
    "name": "Seu nome"
}

Retorno:
{
  "message": "Dados cadastrados com sucesso"
}
```

## Autor
Lucas Lessa