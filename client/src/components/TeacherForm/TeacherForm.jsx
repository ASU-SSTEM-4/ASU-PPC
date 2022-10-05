import React, { Component } from "react";

export default class TeacherForm extends Component {
  render() {
    return (
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-5xl text-3xl font-bold title-font mb-4 text-gray-900">
              Teacher Form
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Please fill in the information below and press the submit button to have you template made.
            </p>
          </div>
          <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div class="relative flex-grow w-full">
              <label for="full-name" class="leading-7 text-sm text-gray-600">
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative flex-grow w-full">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button class="text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">
              Submit
            </button>
          </div>
        </div>
      </section>
    );
  }
}
