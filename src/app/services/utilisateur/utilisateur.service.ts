import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UtilisateurModel} from "../../models/utilisateur/utilisateur.model";
import {Observable} from "rxjs";
import {ReponseStandardModel} from "../../models/reponse/reponse-standard.model";
import {baseUrl} from "../../constants/urls";
import {ModifierInformationUtilisateurModel} from "../../models/utilisateur/modifier-information-utilisateur.model";
import {ChanderMotDePasseUtilisateurModel} from "../../models/utilisateur/chander-motDePasse-utilisateur.model";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) { }

  // Method that calls api/User/Register endpoint to register a user
  registerUser(model: UtilisateurModel): Observable<ReponseStandardModel>{
    return this.http.post<ReponseStandardModel>(`${baseUrl}/Utilisateur/creer-utilisateur`, model);
  }

  // Method that calls api/User/get-all-users endpoint to get all the users
  getAllUsers(): Observable<Array<UtilisateurModel>>{
    return this.http.get<Array<UtilisateurModel>>(`${baseUrl}/Utilisateur/obtenir-tous-les-utilisateurs`)
  }

  // Method that calls api/User/get-user/{email} endpoint to get a user by using him or her email address

  getUser(id: string): Observable<UtilisateurModel>{
    return this.http.get<UtilisateurModel>(`${baseUrl}/Utilisateur/obtenir-utilisateur/${id}` )
  }
  /* Method that calls api/User/modify/{email} endpoint to modify user information such as FirstName,
    LastName, PhoneNumber
   */
  modifyUserInformation(id: string, model: ModifierInformationUtilisateurModel): Observable<ReponseStandardModel>{
    return this.http.put<ReponseStandardModel>(`${baseUrl}/Utilisateur/modify/${id}`, model)
  }

  // Method that calls api/User/change-password/{email} endpoint to change the user password
  changeUserPassword(id: string, model: ChanderMotDePasseUtilisateurModel): Observable<ReponseStandardModel>{
    return this.http.put<ReponseStandardModel>(`${baseUrl}/Utilisateur/change-password/${id}`, model )
  }

  // Method that calls api/User/delete/{email} endpoint to delete a user
  deleteUser(id: string): Observable<ReponseStandardModel>{
    return this.http.delete<ReponseStandardModel>(`${baseUrl}/Utilisateur/delete/${id}`)
  }

}
