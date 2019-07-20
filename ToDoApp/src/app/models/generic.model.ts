export class UrlControl {
  constructor(
    public serviceProvider: string,
    public pathParameters: any,
    // [number, string][]
    public queryParameters: [string, string][]
  ) { }
}
