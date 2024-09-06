/**
 * Project Name: PlantKeeper
 *
 * @created 28-08-2024
 * @file AddSensor.tsx
 * @version 1.0.0
 * @see https://github.com/Plant-keeper
 *
 * @authors
 *   - Rafael Dousse
 *   - Eva Ray
 *   - Quentin Surdez
 *   - Rachel Tranchida
 */
import React from 'react';
import SensorForm from '../components/SensorForm';
import AuthNavbar from '../components/AuthNavbar';

function AddSensor() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <div className="w-full">
        <AuthNavbar />
      </div>
      <div className="flex flex-col items-center justify-center flex-grow min-h-0">
        <div className="m-14 flex flex-col justify-center items-center w-full h-full">
          <SensorForm></SensorForm>
        </div>
      </div>
    </div>
  );
}

export default AddSensor;
