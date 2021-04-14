export class Prompt {
  reader: any;

  constructor() {
    /// 標準入力

    this.reader = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });

  }

  execute(func: (lines: string[]) => void) {
    const lines: string[] = []
    this.reader.on('line', (line: string) => {
      lines.push(line);
    });
    this.reader.on('close', () => {
      func(lines)
    });
  }

}

new Prompt().execute(sample);

export function sample(lines: string[]) {
  const input = (lines[0] as string).split(" ");
  if (input[0] && input[1]) {
    const a = +Number(input[0]);
    const b = +Number(input[1]);
    const res = a - b * 2;

    if (res > 0) {
      console.log(res);
    } else {
      console.log(0);
    }
  }
}

/*
npm ts-node src/docs/input.ts
> 5 1
command + C
the end!
*/
