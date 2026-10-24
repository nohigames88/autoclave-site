// Vídeos carregam por escolha do visitante; uma gravação por vez.
const films=[...document.querySelectorAll('.gameplay-films video')];
films.forEach(film=>film.addEventListener('play',()=>{films.forEach(other=>{if(other!==film)other.pause()})}));
const visibility=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)entry.target.pause()}),{threshold:0});films.forEach(film=>visibility.observe(film));
document.addEventListener('visibilitychange',()=>{if(document.hidden)films.forEach(f=>f.pause())});window.addEventListener('blur',()=>films.forEach(f=>f.pause()));
document.querySelectorAll('[data-game],[data-image],#credits-open').forEach(button=>button.addEventListener('click',()=>films.forEach(f=>f.pause())));
