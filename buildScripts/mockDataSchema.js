export const schema = {
  "type": "object",
  "properties": {
    "users": {
      "type": "array",
      "minItems": 3,
      "maxItems": 15,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "firstName": {
            "type": "string",
            "faker": "name.firstName"
          },
          "lastName": {
            "type": "string",
            "faker": "name.lastName",
          },
          "email": {
            "type": "string",
            "faker": "internet.email",
          },
          "commessa": {
            "type": "string",
            "faker": "helpers.randomize",
            "minLength": "20",
            "maxLength": "20"
            
          },   
          "indice": {
            "type": "number"
          },
          "attivo": {
            "type": "boolean"
          }       

        },
        required: ['id', 'firstName', 'lastName', 'email', 'commessa', "indice", "attivo"]
      }
    }
  },
  required: ['users']
};