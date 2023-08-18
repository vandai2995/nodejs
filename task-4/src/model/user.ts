import { Model, Document, model, Schema } from "mongoose";
import bcrypt from 'bcryptjs';

export interface Users {
    name: string;
    email: string;
    role: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}



export interface UsersDocument extends Users, Document {
    _id: string | Schema.Types.ObjectId;
}

export interface IUsersModel extends Model<UsersDocument> {
    // findUserById(id: string): Promise<UsersDocument>;
}

export const UsersSchema: Schema<UsersDocument, IUsersModel> = new Schema<UsersDocument, IUsersModel>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    password: {
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

UsersSchema.pre<UsersDocument>('save', async function (next) {
    let user = this;
    if (!user.isModified('password')) return next();
    if (user.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    this.updatedAt = new Date();
    return next();
});

UsersSchema.methods.comparePassword = async function (password: string) {
    return await bcrypt.compare(password, this.password);
}


export const UsersModel = model<UsersDocument, IUsersModel>('Users', UsersSchema);




