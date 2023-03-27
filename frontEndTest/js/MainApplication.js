import { Time } from "./components/Time.js";
import { Section1View } from "./views/Section1View.js";
import { Section2View } from "./views/Section2View.js";

class MainApplication {
  constructor()
  {
    this.frame_id = 0;
  }

  start()
  {
    this.section_1_view = new Section1View(this);
    this.section_2_view = new Section2View(this);

    this.section_1_view.start();
    this.section_2_view.start();

    this.view_states = {
      section_1: this.section_1_view,
      section_2: this.section_2_view
    }

    this.current_state = this.view_states.section_1;
    this.current_state.on_enter();

    this.update(0);
  }

  set_state(state)
  {
    this.current_state.on_exit()
    this.current_state = state
    this.current_state.on_enter()
  }

  update(time)
  {
    Time.update(time);
    this.current_state.update(this.frame_id)
    // Suff here...

    // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
    this.frame_id = requestAnimationFrame(this.update.bind(this))
  }
}

export { MainApplication };
