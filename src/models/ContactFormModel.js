import mongoose from 'mongoose';

const contactFormSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
        },
    ],
});

// Create the model for the contact form data.
const ContactForm = mongoose.model('ContactForm', contactFormSchema);

export default ContactForm;
