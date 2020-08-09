import { Schema, Document, model} from 'mongoose';

const postSchema = new Schema ({

    created: {
        type: Date
    },
    mensaje: {
        type: String
    },
    img: [{
        type: String
    }],
    coords: {
        type: String //-12.2132, 12.5151
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: [ true, 'Debe existir una referencia al usuario' ]
    }

});

postSchema.pre<IPost>('save', function( next ) {
    this.created = new Date();
    next();
});

interface IPost extends Document {
    created: Date;
    mensaje: string;
    img: string[];
    coords: string;
    usuario: string;
}

export const Post = model<IPost>('Post',postSchema);