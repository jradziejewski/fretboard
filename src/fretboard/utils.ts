import { scalesIntervals } from "./scales";
import { ScaleIntervals, ScaleName } from "./types";

export function findScaleIntervals(
  scaleName: ScaleName,
): ScaleIntervals | undefined | null {
  for (const category of Object.values(scalesIntervals)) {
    for (const scaleType of Object.values(category)) {
      if (scaleName in scaleType) {
        return scaleType[scaleName];
      }
    }
  }

  return null;
}
