import FastAverageColor from "fast-average-color";

const fac = new FastAverageColor();

export function luminance(r: number, g: number, b: number): number {
  const a = [r, g, b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

export async function getImageCornerColors(element: HTMLImageElement): Promise<{ background: string, light: boolean }> {
  const halfWidth = element.naturalWidth / 2;
  const halfHeight = element.naturalHeight / 2;

  // TODO Cleanup
  return Promise.all([
    // Top Left
    new Promise(resolve => {
      fac.getColorAsync(element, {width: halfWidth, height: halfHeight}).then(color => {
        if (color && 'hex' in color) {
          resolve(color.hex);
        }
      });
    }),
    // Top Right
    new Promise(resolve => {
      fac.getColorAsync(element, {width: halfWidth, height: halfHeight, left: halfWidth}).then(color => {
        if (color && 'hex' in color) {
          resolve(color.hex);
        }
      });
    }),
    // Bottom Left
    new Promise(resolve => {
      fac.getColorAsync(element, {width: halfWidth, height: halfHeight, top: halfHeight}).then(color => {
        if (color && 'hex' in color) {
          resolve(color.hex);
        }
      });
    }),
    // Bottom Right
    new Promise(resolve => {
      fac.getColorAsync(element, {
        width: halfWidth,
        height: halfHeight,
        left: halfWidth,
        top: halfHeight
      }).then(color => {
        if (color && 'hex' in color) {
          resolve(color.hex);
        }
      });
    }),
    // Lightness
    new Promise(resolve => {
      fac.getColorAsync(element).then(color => {
        if (color && 'value' in color) {
          resolve(color.value);
        }
      });
    })
  ]).then(colors => {
    let result = '';
    result += `linear-gradient(to bottom right, ${colors[0]}, 35%, transparent),`;
    result += `linear-gradient(to bottom left, ${colors[1]}, 35%, transparent),`;
    result += `linear-gradient(to top right, ${colors[2]}, 35%, transparent),`;
    result += `linear-gradient(to top left, ${colors[3]}, 35%, transparent),`;
    result += `linear-gradient(rgb(64, 64, 64), rgb(64, 64, 64));`;
    return {
      background: result,
      light: luminance(colors[4][0] as number, colors[4][1] as number, colors[4][2] as number) > 0.4
    };
  })
}
