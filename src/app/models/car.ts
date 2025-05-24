export class Car {
    carId: number;
    brand: string;
    model: string;
    year: number = 0;
    color: string;
    dailyRate ?: number;
    carImage: string;
    regNo: string;

    constructor(){
        this.carId = 0;
        this.brand = "";
        this.model = "";
        this.color = "";
        this.carImage = "";
        this.regNo = "";
    }
}

export interface ICarList{
    carId: number,
    brand: string,
    model: string,
    year: number,
    color: string,
    dailyRate: number,
    carImage: string,
    regNo: string
}