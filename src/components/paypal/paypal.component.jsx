import { PayPalButtons } from "@paypal/react-paypal-js";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import React from "react";

const Paypal = ({ isOpen, setIsOpen, price }) => {
  //   let [isOpen, setIsOpen] = useState(true);

  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  const handleApproved = (orderID) => {
    setPaidFor(true);
  };

  if (paidFor) {
    alert("Thank you for Your Payment");
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-red-600 p-6 text-center align-middle shadow-xl transition-all h-full">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-medium leading-6 text-white mb-11"
                  >
                    Cine Library
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className=" text-white mb-11 text-2xl">
                      Total Amount
                      <br />
                      {price}$
                    </p>
                  </div>

                  <div className="mt-4">
                    <h2 className="text-white">Proceed Payment with PayPal</h2>
                    <PayPalButtons
                      style={{
                        color: "silver",
                        layout: "horizontal",
                        height: 48,
                        tagline: false,
                        shape: "pill",
                      }}
                      createOrder={(data, actions) => {
                        return actions.order.create({
                          purchase_units: [
                            {
                              amount: {
                                value: price,
                              },
                            },
                          ],
                        });
                      }}
                      onApprove={async (data, actions) => {
                        const order = await actions.order.capture();
                        console.log("order", order);
                        handleApproved(data.orderID);
                        closeModal();
                      }}
                      onCancel={() => {}}
                      onError={(err) => {
                        setError(err);
                        console.error("Paypal Checkout Error", err);
                      }}
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Paypal;
