import { Utilities } from "../../components/Utilities.js";
import { ViewState } from "./ViewState.js";

class CommonView extends ViewState
{
  constructor({ container })
  {
    super();

    this.container = container;
  }

  on_enter()
  {
    super.on_enter();

    this.container.classList.remove('hidden');
  }

  on_exit()
  {
    super.on_exit();

    this.container.classList.add('hidden');
  }

  slide(timeStamp) 
  {
    if(!this.startTime) this.startTime = timeStamp
    let elapsedTime = timeStamp - this.startTime;
    let progress = Utilities.ease_in_out_cubic(Math.min(elapsedTime / this.duration, 1))
    let cuerrentValue = this.startAnimation + (this.endAnimation - this.startAnimation) * progress;

    this.container.style.transform = "translateX("+ cuerrentValue +"%)"

    return elapsedTime
  }
}

export { CommonView };
