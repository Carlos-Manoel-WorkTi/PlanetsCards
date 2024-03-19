export default class CardClass {
  name: string;
  link_img: string;
  id: string;
  level:string;

  constructor(name_class: string, img: string, id: string, level:string) {
    this.name = name_class;
    this.link_img = img;
    this.id = id;
    this.level = level;
  }

  public createCard() {
    const cardHard = `
        <div id="${this.id}" class="${this.name} card card-hard flipped ">
        <div class="card-front" style="background-image: url('${this.link_img}');"></div>
        <div class="card-back"></div>
        </div>
      `;
    const cardNormal = `
        <div id="${this.id}"  class=" ${this.name} card card-normal flipped ">
            <div class="card-front" style="background-image: url('${this.link_img}');"></div>
            <div class="card-back"></div>
        </div>
    `;
    const cardEasy = `<div id="${this.id}"  class="${this.name} card card-easy flipped ">
                          <div class="card-front" style="background-image: url('${this.link_img}');"></div>
                          <div class="card-back"></div>
                      </div>`
                      
    return this.level == 'easy' ? cardEasy : (this.level == 'normal' ? cardNormal : cardHard) 
  }
}
