


class LIVES {
  qtd_lives_init: number = parseInt(localStorage.getItem("qtd_life") || "0");
  qtd_lives: number = 0;
  show_lives = document.getElementById("rest_lives") as HTMLElement;

  constructor(current_l: number = 0) {
      this.qtd_lives_init = current_l;
    this.qtd_lives = this.qtd_lives_init;
  };

  public LoadFirstLife() {
    this.show_lives.innerText = String(this.qtd_lives_init);
  }
  public  SubLife(){
    this.qtd_lives -= 1
    this.show_lives.innerText = String(this.qtd_lives)
  }

  public get CurrentLives(){
    return this.qtd_lives
  }
}
const life = new LIVES(parseInt(localStorage.getItem("qtd_life") || "0"));
export default life;
