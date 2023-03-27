class Time
{
  constructor()
  {
    this.elapsed_time = 0;

    this.delta_time = 0.016;
  }

  update(time)
  {
    this.delta_time = time - this.elapsed_time;

    this.delta_time /= 1000;

    this.delta_time = this.delta_time < 0.32 ? this.delta_time : 0.032;
    this.elapsed_time = time;
  }
}

const time = new Time();
export { time as Time }; 
