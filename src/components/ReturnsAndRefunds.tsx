import React from 'react';

export const ReturnsAndRefunds: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Returns and Refunds Policy</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">What is your exchange and return policy?</h2>
          <p>Here at Katin.life, your comfort and satisfaction is of the highest priority to us! With this is mind, we provide a 30-day guarantee period. If you are unhappy with the quality of your sheets or duvets, you can return them to us for a refund or an exchange within 30 days of receiving the product. Please note that return products must be in their original packaging, unwashed and with all tags still in tack. Sheets that are stained, washed and/or soiled cannot be returned. We accept exchanges for size and color, however, that the time taken would depend on stock availability and processing times. Kindly note that Katin does not cover the shipping cost for sending the sheets back to us and for us to send the new sheets to you. If you are exchanging the sheets for a cheaper priced one, for example, a king fitted sheet to a single fitted sheet, we would refund the price difference. However, if the price of the newly exchanged sheets are of a higher price, you would have to pay for the difference in price before we ship it out to you.</p>
          {/* Add more details about the exchange and return policy */}
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">How do I request for a return of the sheets I’ve purchased?</h2>
          <p>Write to us at contact@katin.life or use our contact form here and we’d be happy to assist you with the return of the bedding/ sheets, refunds, and any other enquiries you might have.

Refunds are only processed during working hours, 9am – 5pm from Mondays to Fridays</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">What is your return policy for manufacturer’s defect</h2>
          <p>Please get in touch with us if you have received a defective product once you have received it. We'd will be more than happy to replace the sheets. Please allow for slight color difference in the product and from the pictures you see online, color difference will not be covered in our warranty.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">When will I receive my refund?</h2>
          <p>Refunds will be processed and returned within 3 to 14 working days, depending on the payment method and the bank.</p>
        </section>
      </div>
    </div>
  );
};