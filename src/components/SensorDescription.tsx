/**
 * Project Name: PlantKeeper
 *
 * @created 27-08-2024
 * @file PlantDescription.tsx
 * @version 1.0.0
 * @see https://github.com/Plant-keeper
 *
 * @authors
 *   - Rafael Dousse
 *   - Eva Ray
 *   - Quentin Surdez
 *   - Rachel Tranchida
 */

import React from "react";

import {MdSensors} from "react-icons/md";
import {UpdateButton} from "./UpdateButton";
import {DeleteButton} from "./DeleteButton";
import {API_URL, PLANT_URL, SENSOR_URL} from "../constants";
import {useNavigate} from "react-router-dom";

interface SensorDescriptionProps {
    name: string,
    description: string,
    id: number,
    plantName: string | null,
}

const SensorDescription: React.FC<SensorDescriptionProps> = ({
                                                                 name,
                                                                 description,
                                                                 id,
                                                                 plantName
                                                             }) => {

    const navigate = useNavigate();

    const handleUpdateClick = () => {
        navigate("/updatesensor", {state: {sensorId: id}});
    }

    return (<div className="flex border-4 box-content w-full h-fit rounded-xl">
            <MdSensors size={200} className="m-8"/>
            <div className="flex flex-col m-8 w-full justify-between">
                <div className="flex flex-row items-center justify-between">
                    <p className="text-3xl font-semibold text-left">{name}</p>
                    <div className="flex flex-row items-center text-3xl ml-auto">
                        <div className="mr-3">
                            <UpdateButton handleUpdate={handleUpdateClick}/>
                        </div>
                        <div>
                            <DeleteButton endpoint={API_URL + SENSOR_URL + "/" + id}/>
                        </div>
                    </div>
                </div>
                <p className="text-lg text-left my-3 italic text-gray-500">{description}</p>
                <p className="text-lg text-left my-3">Assigned to plant: {plantName ? plantName : "none"}</p>
                <p className={"text-lg text-left my-3"}>Id: {id}</p>
                <div className="flex flex-row justify-between items-center">
                </div>
            </div>
        </div>

    );
}

export default SensorDescription;
