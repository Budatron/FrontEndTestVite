import { CommonView } from "./common/CommonView.js";

class Section1View extends CommonView
{
  constructor(main_application)
  {
    super({
      container: document.querySelector('.section-1')
    });

    this.main_application = main_application;
    
  }

  start()
  {
    this.startAnimation = 0
    this.endAnimation = 100
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
      this.main_application.set_state(this.main_application.view_states.section_2)
      return
    }
  }
}

export { Section1View }
