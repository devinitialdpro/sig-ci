import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class HomeComponent {
   audio!: HTMLAudioElement;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.audio = document.getElementById('bg-music') as HTMLAudioElement;
  }

  startMusicAndRedirect() {
    if (!this.audio) return;

    this.audio.volume = 0.5;

    this.audio.play().then(() => {

      // sembunyikan tombol play
      const wrap = document.querySelector('.music-center-wrapper') as HTMLElement;
      if (wrap) wrap.style.display = 'none';

      // Arahkan user ke halaman background
      // this.router.navigate(['/home/background']);

    }).catch(err => {
      console.error("Gagal play musik:", err);
    });
  }


}
