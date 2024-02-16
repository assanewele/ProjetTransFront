import { Routes } from '@angular/router';
import {FooterComponent} from "./components/general/footer/footer.component";
import {HeaderComponent} from "./components/general/header/header.component";
import {CreerUtilisateurComponent} from "./components/utilisateur/creer-utilisateur/creer-utilisateur.component";
import {AccueilComponent} from "./components/general/accueil/accueil.component";

export const routes: Routes = [
  {path: "creer-utilisateur", component: CreerUtilisateurComponent},
  {path: "", component: AccueilComponent}
];
