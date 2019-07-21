
export class ConfirmationModalOptions {
  constructor(
    public title: string,
    public message: string,
    public forwardLabel: string,
    public dismissLabel: string,
    public icon: string,
    public disabled: boolean,
    public response: boolean,
    public buttonName?: string,
    public paramAdd?: boolean,
    public clase?: string,
    public param?: any

  ) { }
}
