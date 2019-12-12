"use strict";

export const Result={
   success : "success",
   failure : "failure",
   running : "running",
   queued : "queued",
   paused : "paused",
   unstable : "unstable",
   aborted : "aborted",
   not_built : "not_built",
   skipped : "skipped",
   unknown : "unknown",
}

export function decodeResultValue(resultMaybe) {
    const lcase = String(resultMaybe).toLowerCase();
    for (const enumKey of Object.keys(Result)) {
        const enumValue = Result[enumKey];
        if (enumKey.toLowerCase() === lcase || enumValue.toLowerCase() === lcase) {
            return enumValue;
        }
    }
    return Result.unknown;
}
// Dimensions used for layout, px
export const defaultLayout = {
    nodeSpacingH: 120,
    parallelSpacingH: 120,
    nodeSpacingV: 70,
    nodeRadius: 12,
    terminalRadius: 7,
    curveRadius: 12,
    connectorStrokeWidth: 3.5,
    labelOffsetV: 20,
    smallLabelOffsetV: 15,
    ypStart: 55,
};
