


class LIVES {
  qtd_lives_init: number = parseInt(JSON.parse(localStorage.getItem("infoGame") || "0").qtd_life);
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
const prop = JSON.parse(localStorage.getItem("infoGame") || "0")
const life = new LIVES(parseInt(prop.qtd_life))
export default life;
