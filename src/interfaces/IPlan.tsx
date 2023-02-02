export enum TypePlan {
    MONTHLY,
    YEARLY
}


export interface IPlan {
    name: string;
    price: string;
    typePlan: TypePlan;
}