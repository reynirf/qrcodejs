declare class QRCode {
  constructor() {}
  makeImage(): void;
  makeCode(text: string): void;
  clear(): void;
}

export default QRCode
