import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

 
  for (let i = 0; i < 60; i++) {
    let star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.animationDelay = Math.random() * 5 + "s";
    document.body.appendChild(star);
  } ; 
  