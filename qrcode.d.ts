declare class QRCode {
  constructor(element: string, options: BaseOptions) {}
  makeImage(): void;
  makeCode(text: string): void;
  clear(): void;
}

interface BaseOptions {
  width?: number = 256;
  height?: number = 256;
  typeNumber?: number = 4;
  colorDark?: string = '#000000';
  colorLight?: string = '#ffffff';
  correctLevel?: QRErrorCorrectLevel.H;
}

export default QRCode
