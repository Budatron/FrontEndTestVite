import { CommonView } from "./common/CommonView.js";

class Section2View extends CommonView
{
  constructor(main_application)
  {
    super({
      container: document.querySelector('.section-2')
    });

    this.main_application = main_application;
  }

  start()
  {
    this.container.style.transform = "translateX(-100%)"
    this.startAnimation = -100
    this.endAnimation = 0
    this.duration = 100
    this.startTime = null
  }

  on_enter()
  {
    super.on_enter();
  }

  update(timeStamp)
  {
    let elapsedTime = super.slide(timeStamp)
    if(elapsedTime > this.duration) {
      return
    }
  }
}

export { Section2View }
