export const Validation = {
    nom: {
      presence: {
        message: "Veuillez entrez un nom"
      },
      length: {
        minimum: 4,
        message: "Le nom doit avoir 4 caracteres minimum"
      }
    },
    email: {
      presence: {
        message: "Veuillez entrer un email"
      },
      non_valide: {
        message: "Veuillez entrer un email valide"
      }
    },

    anneeNaissance: {
      presence: {
        message: "Veuillez entrez une date"
      },
      non_valide: {
        message: "Entrez une date au dela de 1950"
      }
    },
  
    password: {
      presence: {
        message: "Veuillez saisir le mot de passe"
      },
      length: {
        minimum: 6,
        message: "Le mot de passe doit avoir 6 caracteres minimum"
      },
      confirm: {
        message: "Les mots de passe ne correspondent pas"
      }
    }
  }
  