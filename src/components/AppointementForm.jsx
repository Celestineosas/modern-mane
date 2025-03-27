import { useState } from "react";
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Button from "./Button";

const AppointementForm = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <div className="mx-20 max-md:mx-4 lg:max-w-sm lg:w-3/5 border border-white rounded-3xl p-10">
            <h3 className="font-montserrat text-3xl max-sm:text-2xl text-white mb-7 font-semibold sm:whitespace-nowrap leading-normal">Make an appointment</h3>
            <form className="space-y-6" action="#" method="POST">
                <div>
                    <div className="mt-2">
                        <input
                            type="text"
                            placeholder="John Lenon"
                            name="name"
                            id="name"
                            autoComplete="name"
                            required
                            className="block w-full rounded-md bg-white p-4 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div>
                    <div className="mt-0">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            placeholder="Email"
                            required
                            className="block p-4 w-full rounded-md bg-transparent border border-white text-base text-gray-500 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
                        />
                    </div>
                    <div className="mt-5">
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            autoComplete="phone"
                            placeholder="Phone"
                            required
                            className="block p-4 w-full rounded-md bg-transparent border border-white text-base text-gray-500 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div className="flex flex-1 max-md:flex-col gap-4">
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        minDate={new Date()}
                        showTimeSelect
                        dateFormat="yyyy-MM-dd h:mm aa"
                        placeholderText="2024-05-14 10:00PM"
                        className="block p-4 w-full flex-1 rounded-md bg-transparent border border-white text-base text-gray-500 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
                    />
                    <Button label="Submit request" />
                </div>
            </form>
        </div>
    );
};

export default AppointementForm;