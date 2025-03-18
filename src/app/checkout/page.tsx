"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Checkout() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    paymentMethod: "cash",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckout = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Order placed successfully!");
    router.push("/");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md p-6 rounded-lg w-full max-w-4xl flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-bold mb-4 text-center">Checkout</h2>
          <form onSubmit={handleCheckout}>
            <div className="mb-4">
              <label className="block text-gray-600">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-600">Address</label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-600">Payment Method</label>
              <select
                name="paymentMethod"
                value={form.paymentMethod}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              >
                <option value="cash">Cash on Delivery</option>
              </select>
            </div>

            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-90 w-full"
            >
              Place Order
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/3 bg-gray-50 p-4 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-4">Payment Summary</h3>
          <div className="mb-2 flex justify-between">
            <span>Item 1</span>
            <span>$20.00</span>
          </div>
          <div className="mb-2 flex justify-between">
            <span>Item 2</span>
            <span>$15.00</span>
          </div>
          <div className="mb-2 flex justify-between text-gray-700">
            <span>Subtotal:</span>
            <span>$35.00</span>
          </div>
          <div className="mb-2 flex justify-between text-gray-700">
            <span>Tax (5%):</span>
            <span>$1.75</span>
          </div>
          <hr className="my-2" />
          <div className="mb-2 flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>$36.75</span>
          </div>
        </div>
      </div>
    </div>
  );
}
