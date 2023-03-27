class Utilities
{
  static linear_map(value,
    from_range_start_value,
    from_range_end_value,
    to_range_start_value,
    to_range_end_value)
  {
    return ((value - from_range_start_value) / (from_range_end_value - from_range_start_value)) * (to_range_end_value - to_range_start_value) + to_range_start_value;
  }

  static ease_in_out_cubic(x)
  {
    return x < 0.5
      ? 4 * x * x * x
      : 1 - Math.pow(-2 * x + 2, 3) / 2;
  }
}

export { Utilities };
