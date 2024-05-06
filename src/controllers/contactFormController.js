import ContactForm from '../models/ContactFormModel.js';

// Define the route for handling the contact form submission.
export const submitContactForm = async (req, res) => {
   try {
      // Get the contact form data from the request body.
      const { name, email, message } = req.body;

      // Create a new contact form object and save it to the database.
      const contactForm = new ContactForm({
         name,
         email,
         message
      });
      await contactForm.save();

      // Send a success response to the client.
      res.json({ success: true });
   } catch (error) {
      console.error("Error submitting contact form:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
   }
};
