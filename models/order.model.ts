type Status = 'Tramitando pedido' | 'En camino' | 'Entregado'; 

type Address = {
    street: string,
    city: string,
    postal_code: number,
    province: string
};

export class Order {
    constructor(private id: number, private purchase_date: string,
      private delivery_date: string, private id_user: number, 
      private id_vehicle: number[], private price: number, 
      private status: Status, private shipping_address: Address) {}
}