/*
######################################################################
######################################################################
##################### connection to laravel api ######################
######################################################################
######################################################################
*/

export const DOMAINE = "http://192.168.1.10:9100/";
export const INSCRIPTION = "api/auth/register";
export const CONNEXION = "api/auth/login";
export const USERAUTHENTIFIE = "api/auth/me";
export const DECONNEXION = "api/auth/logout";
export const EDITERMOTDEPASSE = "api/auth/update-password";
export const CHANGEREMAIL = "api/auth/update-email";
export const SUPPRIMERCOMPTE = "api/auth/delete-user";
export const CHANGERNOM = "api/update-name";
export const CHANGERPHOTO = "api/update-photo";
export const TOUTLESUTILISATEURS = "api/all-users";
export const RECUPERERUSERMESSAGE = "go-search-user";
export const RECUPERERMESSAGE = "go-search-message";
export const SENDMESSAGE = "send-message";