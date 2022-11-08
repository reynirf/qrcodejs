declare class QRCode {
  constructor(element: string, options: BaseOptions);
  makeImage(): void;
  makeCode(text: string): void;
  clear(): void;
}

interface BaseOptions {
  width?: number;
  height?: number;
  typeNumber?: number;
  colorDark?: string;
  colorLight?: string;
  correctLevel?: any;
}

export default QRCode
