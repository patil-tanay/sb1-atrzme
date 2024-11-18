import { format } from 'date-fns';

export const sendEventConfirmationEmail = async (
  userEmail: string,
  eventDetails: {
    title: string;
    date: Date;
    location: string;
  }
) => {
  // In a production environment, you would integrate with a proper email service
  // For now, we'll just log the email content
  console.log(`
    To: ${userEmail}
    Subject: Event Registration Confirmation - ${eventDetails.title}
    
    Thank you for registering for ${eventDetails.title}!
    
    Event Details:
    Date: ${format(eventDetails.date, 'PPP')}
    Location: ${eventDetails.location}
    
    Please keep this email as your confirmation.
  `);
};