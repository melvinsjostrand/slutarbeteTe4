export class ResetPassword{
    subscribe(arg0: { next: (res: any) => void; error: (err: any) => void; }): any {
      throw new Error('Method not implemented.');
    }
    public email! : string;
    public emailToken!: string;
    public newPassword!: string;
    public confirmPassword!: string;
}