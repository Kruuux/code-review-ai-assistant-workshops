import fs from 'fs';

export const calculateRectangleArea = (
  length: number,
  width: number,
): number => {
  /**
   * Calculate the area of a rectangle given its length and width.
   *
   * @param length - The length of the rectangle
   * @param width - The width of the rectangle
   * @returns The area of the rectangle
   */

  const area = length * width;
  return area;
};
