import React, { useState } from "react";

const Credit = () => {
  const [isTermsVisible, setIsTermsVisible] = useState(false);

  const toggleTermsVisibility = () => {
    setIsTermsVisible(!isTermsVisible);
  };

  const handleClick = () => {
    toggleTermsVisibility();
  };

  const icon = isTermsVisible ? "fi-rr-minus-circle" : "fi-rr-add";

  const termsListClasses = `text-xs text-gray-500 ${
    isTermsVisible
      ? "transition-all duration-500 ease-in-out max-h-full opacity-100"
      : "transition-all duration-500 ease-in-out max-h-0 opacity-0"
  }`;

  const [isContentVisible1, setIsContentVisible1] = useState(false);
  const [isContentVisible2, setIsContentVisible2] = useState(false);
  const [isContentVisible3, setIsContentVisible3] = useState(false);
  const [isContentVisible4, setIsContentVisible4] = useState(false);
  const [isContentVisible5, setIsContentVisible5] = useState(false);
  const [isContentVisible6, setIsContentVisible6] = useState(false);
  const [isContentVisible7, setIsContentVisible7] = useState(false);
  const [isContentVisible8, setIsContentVisible8] = useState(false);
  const [isContentVisible9, setIsContentVisible9] = useState(false);
  const [isContentVisible10, setIsContentVisible10] = useState(false);

  const toggleAccordion1 = () => {
    setIsContentVisible1(!isContentVisible1);
  };

  const toggleAccordion2 = () => {
    setIsContentVisible2(!isContentVisible2);
  };

  const toggleAccordion3 = () => {
    setIsContentVisible3(!isContentVisible3);
  };

  const toggleAccordion4 = () => {
    setIsContentVisible4(!isContentVisible4);
  };

  const toggleAccordion5 = () => {
    setIsContentVisible5(!isContentVisible5);
  };

  const toggleAccordion6 = () => {
    setIsContentVisible6(!isContentVisible6);
  };

  const toggleAccordion7 = () => {
    setIsContentVisible7(!isContentVisible7);
  };

  const toggleAccordion8 = () => {
    setIsContentVisible8(!isContentVisible8);
  };

  const toggleAccordion9 = () => {
    setIsContentVisible9(!isContentVisible9);
  };

  const toggleAccordion10 = () => {
    setIsContentVisible10(!isContentVisible10);
  };

  return (
    <div>
      <div className="pt-4">
        <img
          src="https://in.bmscdn.com/offers/tncbanner/sbi-inr-500-off-on-signature-credit-card-sbi0613.jpg?07122023114930"
          alt=""
          className="w-full "
        />
      </div>
      <div className="w-full h-[109px] flex items-center justify-center bg-gray-100">
        <div className="w-[86%] h-full flex gap-6">
          <div className="w-[220px] h-full">
            <div className="text-start pt-8 text-sm text-gray-600">
              VALID ON
            </div>
            <div className="text-start text-sm h-[40%] mt-3">Web & App</div>
          </div>
          <div className="w-[220px] h-full">
            <div className="text-start pt-8 text-sm text-gray-600">QUOTAS</div>
            <div className="text-start text-sm h-[40%] mt-3">No Quotas</div>
          </div>
          <div className="w-[220px] h-full">
            <div className="text-start pt-8 text-sm text-gray-600">
              VALID TILL
            </div>
            <div className="text-start text-sm h-[40%] mt-3">
              31-Mar-2026 23:59
            </div>
          </div>
          <div className="w-[220px] h-full">
            <div className="text-start pt-8 text-sm text-gray-600">
              OTHER CONDITIONS
            </div>
            <div className="text-start text-sm h-[40%] mt-3">
              Available all days of the week
            </div>
          </div>
          <button className="w-40 px-2 ml-3 rounded-lg h-12 mt-[30px] bg-red-500 text-sm text-white font-bold">
            BOOK NOW
          </button>
        </div>
      </div>
      <div className="h-36 w-full flex  justify-center">
        {/* <div className='absolute h-36 w-[7%] mr-[1270px] bg-gray-100'></div> */}
        {/* <div className='absolute h-36 w-[7%] ml-[1270px] bg-gray-100'></div> */}
        <div className=" w-[86%] h-full">
          <div className="w-full h-[80%] mt-7 pl-8 flex gap-7">
            <div className="h-full w-28 rounded-md ">
              <div className="h-full w-full rounded-full overflow-hidden">
                <img
                  src="https://in.bmscdn.com/offers/tnclogo/sbi-inr-500-off-on-signature-credit-card-sbi0613.jpg?07122023114930"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="text-2xl py-10">
              SBI SIGNATURE/ELITE CREDIT CARD OFFER
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 ">
        <div className="p-4 flex flex-wrap">
          <div className="bg-white rounded-lg shadow-md w-full md:w-[calc(50%-0.5rem)] text-justify md:mr-4 md:mb-0 mb-4">
            {/* About the offer */}
            <div className="px-4 py-2 border-b border-gray-200">
              <h6 className="text-lg font-semibold text-gray-700">
                ABOUT THE OFFER
              </h6>
              <div className="my-5 text-xs font-normal text-gray-500">
                <ol className="list-decimal list-outside pl-3 space-y-2">
                  <li>
                    Get 2 free movie tickets per month or INR 500 off whichever
                    is less with SBI Signature/Elite credit card
                  </li>
                  <li>Offer valid on purchase of minimum 2 movie tickets</li>
                  <li>This offer is valid only on the primary card</li>
                  <li>
                    To know more about SBI Card ELITE, please SMS “ELITE” to
                    5676791
                  </li>
                  <li>
                    Due to technical issues, SBI Signature/Elite credit card
                    offer shall not be available for cardholders of SBI Card
                    ELITE American Express® Card from 1st October 2022 onwards
                  </li>
                </ol>
              </div>
            </div>
            {/* How to avail offer */}
            <div className="px-4 py-4 border-b border-gray-200">
              <h6 className="text-lg font-semibold text-gray-700">
                HOW TO AVAIL THE OFFER
              </h6>
              <ol className="mt-5 text-xs font-normal text-gray-500 list-decimal list-ouside space-y-2 pl-3">
                <li>
                  Go through the regular ticketing flow for selecting the movie,
                  cinema and show of your choice
                </li>
                <li>Proceed to payments page</li>
                <li>
                  Confirm your details by providing your email id &amp; mobile
                  number as this information will be used for confirming your
                  transaction
                </li>
                <li>
                  To avail offer, check 'Unlock Offer or Apply Promocodes’
                </li>
                <li>Click on the tab - Credit/ Debit/ Net Banking</li>
                <li>
                  Click on 'Select Offer' and choose 'SBI Signature/Elite credit
                  card INR 500 off' from the offers drop down list
                </li>
                <li>
                  Enter your 16 digit credit card number in the box and click on
                  'Check'
                </li>
                <li>
                  Congratulations! You would have successfully availed your
                  offer
                </li>
                <li>
                  You will have to pay the remaining transaction amount using
                  the same card on which you have availed the offer. Your card
                  number will auto populate in the box. To make the payment,
                  enter your name on the card, expiry date and CVV card details
                </li>
              </ol>
            </div>
            {/* Terms and Conditions */}
          <div className="px-4 py-4 border-b border-gray-200 ">
            <div
              className="flex items-center  cursor-pointer pb-3 "
              onClick={handleClick}
            >
              <div className="w-4  pt-1">
                <i className={`fi ${icon}`}></i>
              </div>
              <div className="text-lg font-semibold text-gray-700 pl-3">
                Terms and Condition
              </div>
            </div>
            <ul className={termsListClasses}>
              <li className="my-2">
                For precise eligibility terms and conditions for this offer,
                please see the FAQs
              </li>
              <li className="my-2">
                In case you have applied for the discount but the transaction
                doesn't go through for some reason, kindly wait for 20 minutes
                before trying to avail the discount again
              </li>
              <li className="my-2">
                This offer is valid only for users coming directly to the
                BookMyShow Website and not via individual cinema sites
              </li>
              <li className="my-2">
                Offer is applicable only for bookings for cinema tickets made on
                the BookMyShow website bookmyshow.com and the BookMyShow App
              </li>
              <li className="my-2">
                The offer cannot be combined with any offer/discounts/promotions
                at the theatres available on bookmyshow.com
              </li>
              <li className="my-2">
                Tickets are subject to availability at the cinema
              </li>
              <li className="my-2">
                Tickets once bought on line, shall be considered sold and cannot
                be cancelled, refunded or exchanged
              </li>
              <li className="my-2">
                Once the booking is committed, the confirmation mail/SMS
                received from BookMyShow needs to be exchanged with the ticket
                available at the theatre
              </li>
              <li className="my-2">
                Customers shall not be entitled to compensation/benefits in any
                form whatsoever in lieu of the offer being availed
              </li>
              <li className="my-2">
                Bigtree & SBI Card reserves the right to disqualify any
                customer/s from the benefits of the program. If case of any
                fraudulent activity, prosecution will be carried according to
                the purpose of availing the benefits under the program
              </li>
              <li className="my-2">
                Bigtree & SBI Card reserves the right to modify/change all or
                any of the terms applicable to the program without assigning any
                reasons or without any prior intimation whatsoever
              </li>
              <li className="my-2">
                Bigtree & SBI Card also reserves the right to discontinue the
                program without assigning any reasons or without any prior
                intimation whatsoever
              </li>
              <li className="my-2">Individual cinema rules applicable</li>
              <li className="my-2">
                The SBI Card customers are not bound in any way to participate
                in this program. Any such participation is voluntary and the
                same is being made purely on a "best effort basis"
              </li>
              <li className="my-2">
                Bigtree & SBI Card reserves the right at any time without prior
                notice to add, alter, modify, all or any of these terms and
                conditions or replace, wholly or in part, this program by any
                other program, whether similar to this program or not or to
                withdraw it altogether
              </li>
              <li className="my-2">
                In addition to the above, this offer on the website is also
                subject to BookMyShow's general Terms of Use. Kindly refer to
                BookMyShow's Terms & Conditions on the homepage
              </li>
              <li className="my-2">
                Customers shall be required to give personal information and
                card details on line for the tickets purchased on bookmyshow.com
              </li>
              <li className="my-2">
                In case of any disputes, Bigtree's decision will be final
              </li>
            </ul>
          </div>
          </div>
          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-md w-full md:w-[calc(50%-0.5rem)] ">
            <div className="px-4 py-2">
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold text-gray-700">FAQs</div>
              </div>
              <div className=" mt-4 text-xs font-normal space-y-4 ">
                <ul className="">
                  <div className=" flex  items-center pb-2">
                    <div
                      className="text-sm pt-1 cursor-pointer"
                      onClick={toggleAccordion1}
                    >
                      <i
                        className={`fi ${
                          isContentVisible1 ? "fi-rr-minus-circle" : "fi-rr-add"
                        }`}
                      ></i>
                    </div>
                    <div
                      className="pl-3 text-gray-500 cursor-pointer"
                      onClick={toggleAccordion1}
                    >
                      What are the maximum number of free tickets one can avail?
                    </div>
                  </div>
                  {isContentVisible1 && (
                    <div className="pl-7 text-sm text-justify ">
                      <div className="text-gray-600">
                        A customer can get 2 free movie tickets or INR 500 off
                        whichever is less on each transaction. The maximum
                        discount per ticket is INR 250
                      </div>
                    </div>
                  )}
                  <div className=" flex  items-center py-2">
                    <div
                      className="text-sm pt-1 cursor-pointer"
                      onClick={toggleAccordion2}
                    >
                      <i
                        className={`fi ${
                          isContentVisible2 ? "fi-rr-minus-circle" : "fi-rr-add"
                        }`}
                      ></i>
                    </div>
                    <div
                      className="pl-3 text-gray-500 cursor-pointer"
                      onClick={toggleAccordion2}
                    >
                      Can I purchase tickets which cost over INr 500 and still
                      avail the offer?
                    </div>
                  </div>
                  {isContentVisible2 && (
                    <div className="pl-7 text-sm text-justify ">
                      <div className="text-gray-600">
                        Yes. The Customer can buy tickets above INR 500 and
                        avail the offer. He/she shall pay the differential
                        amount. Example : If a customer buys 2 tickets and each
                        ticket cost is for INR 300. Total transaction value will
                        be INR 600 plus the convenience fee. Discount amount
                        will be INR 500 (as discount on each ticket is INR 250).
                        Customer will have to pay INR 100 plus the convenience
                        fee as levied
                      </div>
                    </div>
                  )}
                  <div className=" flex  items-center py-2">
                    <div
                      className="text-sm pt-1 cursor-pointer"
                      onClick={toggleAccordion3}
                    >
                      <i
                        className={`fi ${
                          isContentVisible3 ? "fi-rr-minus-circle" : "fi-rr-add"
                        }`}
                      ></i>
                    </div>
                    <div
                      className="pl-3 text-gray-500 cursor-pointer"
                      onClick={toggleAccordion3}
                    >
                      Can I book one ticket and get second free?
                    </div>
                  </div>
                  {isContentVisible3 && (
                    <div className="pl-7 text-sm text-justify ">
                      <div className="text-gray-600">
                      No. The offer is valid on purchase of minimum 2 movie tickets
                      </div>
                    </div>
                  )}
                  <div className=" flex  items-center py-2">
                    <div
                      className="text-sm pt-1 cursor-pointer"
                      onClick={toggleAccordion4}
                    >
                      <i
                        className={`fi ${
                          isContentVisible4 ? "fi-rr-minus-circle" : "fi-rr-add"
                        }`}
                      ></i>
                    </div>
                    <div
                      className="pl-3 text-gray-500 cursor-pointer"
                      onClick={toggleAccordion4}
                    >
                      Can the offer be availed across categories present on BookMyShow?
                    </div>
                  </div>
                  {isContentVisible4 && (
                    <div className="pl-7 text-sm text-justify ">
                      <div className="text-gray-600">
                      No. This offer is applicable on movies only
                      </div>
                    </div>
                  )}
                  <div className=" flex  items-center py-2">
                    <div
                      className="text-sm pt-1 cursor-pointer"
                      onClick={toggleAccordion5}
                    >
                      <i
                        className={`fi ${
                          isContentVisible5 ? "fi-rr-minus-circle" : "fi-rr-add"
                        }`}
                      ></i>
                    </div>
                    <div
                      className="pl-3 text-gray-500 cursor-pointer"
                      onClick={toggleAccordion5}
                    >
                     How do I check whether my card is eligible for the offer?
                    </div>
                  </div>
                  {isContentVisible5 && (
                    <div className="pl-7 text-sm text-justify ">
                      <div className="text-gray-600">
                      Check the eligible card category under 'About the offer' section. In case you still have queries, you can proceed to the payment page and enter your card details and try availing the offer. An error message will pop up if your card is invalid
                      </div>
                    </div>
                  )}
                  <div className=" flex  items-center py-2">
                    <div
                      className="text-sm pt-1 cursor-pointer"
                      onClick={toggleAccordion6}
                    >
                      <i
                        className={`fi ${
                          isContentVisible6 ? "fi-rr-minus-circle" : "fi-rr-add"
                        }`}
                      ></i>
                    </div>
                    <div
                      className="pl-3 text-gray-500 cursor-pointer"
                      onClick={toggleAccordion6}
                    >
                     What happens in case of an unsuccessful transaction?
                    </div>
                  </div>
                  {isContentVisible6 && (
                    <div className="pl-7 text-sm text-justify ">
                      <div className="text-gray-600">
                      For any queries related to failed or unsuccessful transaction, you can get in touch with the BookMyShow Support Center or visit https://support.bookmyshow.com 
                      </div>
                    </div>
                  )}
                  <div className=" flex  items-center py-2">
                    <div
                      className="text-sm pt-1 cursor-pointer"
                      onClick={toggleAccordion7}
                    >
                      <i
                        className={`fi ${
                          isContentVisible7 ? "fi-rr-minus-circle" : "fi-rr-add"
                        }`}
                      ></i>
                    </div>
                    <div
                      className="pl-3 text-gray-500 cursor-pointer"
                      onClick={toggleAccordion7}
                    >
                     What if the show is cancelled and the customer has availed the discount?
                    </div>
                  </div>
                  {isContentVisible7 && (
                    <div className="pl-7 text-sm text-justify ">
                      <div className="text-gray-600">
                      In case the show is cancelled and the payment has been debited from your account, you can get in touch with BookMyShow Support Center or visit https://support.bookmyshow.com and claim your refund 
                      </div>
                    </div>
                  )}
                  <div className=" flex  items-center py-2">
                    <div
                      className="text-sm pt-1 cursor-pointer"
                      onClick={toggleAccordion8}
                    >
                      <i
                        className={`fi ${
                          isContentVisible8 ? "fi-rr-minus-circle" : "fi-rr-add"
                        }`}
                      ></i>
                    </div>
                    <div
                      className="pl-3 text-gray-500 cursor-pointer"
                      onClick={toggleAccordion8}
                    >
                    How to apply for SBI Card ELITE.
                    </div>
                  </div>
                  {isContentVisible8 && (
                    <div className="pl-7 text-sm text-justify ">
                      <div className="text-gray-600">
                      To know more about SBI Card ELITE, pls SMS “ELITE” to 5676791
                      </div>
                    </div>
                  )}
                  <div className=" flex  items-center py-2">
                    <div
                      className="text-sm pt-1 cursor-pointer"
                      onClick={toggleAccordion9}
                    >
                      <i
                        className={`fi ${
                          isContentVisible9 ? "fi-rr-minus-circle" : "fi-rr-add"
                        }`}
                      ></i>
                    </div>
                    <div
                      className="pl-3 text-gray-500 cursor-pointer"
                      onClick={toggleAccordion9}
                    >
                    Which bin ranges are eligible for the offer?
                    </div>
                  </div>
                  {isContentVisible9 && (
                    <div className="pl-7 text-sm text-justify ">
                      <div className="text-gray-600">
                      The following bin ranges are eligible for the offer 403250640,403250646,403250647,
403250648,403250649,433587644,433587744,536298741,536298742,536298743,
433587786,433587787,433587788,433587789,433587796,403250475,403250476,
538865770,403250477,433587441,433587445,433587487,433587470,433587495,
433587496,433587864,433587895,433587759,433587887,652903838
                      </div>
                    </div>
                  )}
                   <div className=" flex  items-center py-2">
                    <div
                      className="text-sm pt-1 cursor-pointer"
                      onClick={toggleAccordion10}
                    >
                      <i
                        className={`fi ${
                          isContentVisible10 ? "fi-rr-minus-circle" : "fi-rr-add"
                        }`}
                      ></i>
                    </div>
                    <div
                      className="pl-3 text-gray-500 cursor-pointer"
                      onClick={toggleAccordion10}
                    >
                    What is a bin range?
                    </div>
                  </div>
                  {isContentVisible10 && (
                    <div className="pl-7 text-sm text-justify ">
                      <div className="text-gray-600">
                      Bin range are the first 6 digits on your Credit/ Debit card
                      </div>
                    </div>
                  )}
                </ul>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="text-xs py-4 text-gray-400 text-start ml-16">
        Online Tickets &rarr; Offers sbi Inr 500 Off On Elite Credit Card
        SBI0613
      </div>
      <div className="bg-gray-100 flex items-center justify-center">
        <div className="w-[90%] ">
          <div className="py-4">
            <h2 className="text-lg text-gray-500 text-start">
              <b>Privacy Note</b>
            </h2>
          </div>
          <div className="pb-6">
            <div className="text-justify text-xs text-gray-500">
              By using www.bookmyshow.com(our website), you are fully accepting
              the Privacy Policy available at{" "}
              <a href="/privacy" className="text-red-600">
                https://bookmyshow.com/privacy
              </a>{" "}
              governing your access to Bookmyshow and provision of services by
              Bookmyshow to you. If you do not accept terms mentioned in the{" "}
              <a href="/privacy" className="text-red-600">
                Privacy Policy
              </a>
              , you must not share any of your personal information and
              immediately exit Bookmyshow.
            </div>
          </div>
        </div>
      </div>
      <script>
        {`
          document.addEventListener('DOMContentLoaded', function() {
            document.querySelector('.cursor-pointer').addEventListener('click', function() {
              var termsList = document.querySelector('.list-none');
              termsList.style.display = termsList.style.display === 'none' ? 'block' : 'none';
            });
          });
        `}
      </script>
    </div>
  );
};

export default Credit;
