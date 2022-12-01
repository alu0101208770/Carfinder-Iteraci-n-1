export class Pay {
  constructor(private id_user: number, private dni: string, private card_number: number,
      private titular: string, private expiration_date: string, private CVV: number) {}
}