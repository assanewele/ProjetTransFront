import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CreerUtilisateurComponent} from "./components/utilisateur/creer-utilisateur/creer-utilisateur.component";
import {HeaderComponent} from "./components/general/header/header.component";
import {FooterComponent} from "./components/general/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreerUtilisateurComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projetTransUI';
}
