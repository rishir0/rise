import React from 'react';
import { Button } from '../components/Button';
import { MapPin, Phone, Mail } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="pt-16">
      <div className="bg-[#E0F0FF] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#002B5B]">Contact Us</h1>
            <p className="mt-4 text-xl text-gray-600">
              Get in touch with us to discuss your project
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-[#002B5B] mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#002B5B] focus:ring-[#002B5B]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#002B5B] focus:ring-[#002B5B]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#002B5B] focus:ring-[#002B5B]"
                ></textarea>
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-[#002B5B] mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-[#002B5B] mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Office Location</h3>
                  <p className="mt-1 text-gray-600">123 Business Street<br />New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-[#002B5B] mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                  <p className="mt-1 text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-[#002B5B] mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="mt-1 text-gray-600">contact@riseonline.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
