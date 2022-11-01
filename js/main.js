class String {
  constructor(js) {
    this.title = document.querySelector(js.title);
    this.text = this.title.innerHTML;
    this.title.innerHTML = "";
    this.i = 0;
    this.func();
  }
  func() {
    this.title.innerHTML += this.text.charAt(this.i);
    this.i++;
    setTimeout(() => {
      this.func();
    }, 100);
  }
}
let string = new String({
  title: ".hello-title",
});
let timer = document.querySelector(".timer"),
  hour = document.querySelector(".footer__clock-hours"),
  minut = document.querySelector(".footer__clock-timer"),
  secnd = document.querySelector(".footer__clock-secnd");

hour.innerHTML = `18`;
minut.innerHTML = `32`;
secnd.innerHTML = `00`;

