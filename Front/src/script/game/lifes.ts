


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
    const img = document.querySelector('#line_life') as HTMLElement
    img.setAttribute('stroke', 'orange');
    console.log(img);
    
    this.show_lives.classList.add('animate__flash')
    img.classList.add('animate__flash')
    setTimeout(()=>{
      img.classList.remove('animate__flash')
      this.show_lives.classList.remove('animate__flash')
      img.setAttribute('stroke', 'red');
    },1000)
  }

  public get CurrentLives(){
    return this.qtd_lives
  }
  public get restLives(){
    return this.qtd_lives
  }
}
const prop = JSON.parse(localStorage.getItem("infoGame") || "0")
const life = new LIVES(parseInt(prop.qtd_life))
export default life;
