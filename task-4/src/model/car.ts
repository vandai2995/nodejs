import { Model, Document, model, Schema } from "mongoose";

export interface Cars {
    brand: string;
    color: string;
    createdAt: Date;
    updatedAt: Date;
}



export interface CarsDocument extends Cars, Document {
    _id: string | Schema.Types.ObjectId;
}

export interface ICarsModel extends Model<CarsDocument> {
}

export const CarsSchema: Schema<CarsDocument, ICarsModel> = new Schema<CarsDocument, ICarsModel>({
    brand: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        required: true,
    },
    updatedAt: {
        type: Date,
        default: Date.now(),
        required: true,
    }
},
    {
        timestamps: { createdAt: 'created_ts', updatedAt: 'updated_ts' },
        validateBeforeSave: true,
    },
);


export const CarsModel = model<CarsDocument, ICarsModel>('Cars', CarsSchema);




