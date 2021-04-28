// 参考: https://zenn.dev/daku10/articles/simple-nodejs-readline-mock#fnref1
let sendLine: (line: string) => void;
let sendClose: () => void;

jest.mock("readline", () => {
  return {
    createInterface: () => {
      return {
        on: (event: string, callback: (...args: any) => void) => {
          switch (event) {
            case "line":
              sendLine = callback;
              break;
            case "close":
              sendClose = callback;
              break;
          }
        },
      };
    },
  };
});

export { sendLine, sendClose };
