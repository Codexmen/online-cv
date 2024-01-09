import React from "react";

type EmploymentItemProps = {
    name: string,
    position: string,
    startDate: string,
    endDate?: string,
    responsibilities: string[],
    stack: string[]
}

export function EmploymentItem({name, position, startDate, endDate, responsibilities, stack}: EmploymentItemProps) {
    return (
        <div className="pb-6">
            <div className={'text-xl'}>{name}</div>
            <div className={''}>{position}</div>
            <div className={'pb-2'}>{startDate} - {endDate ? endDate : 'Now'}</div>
            <ul className="list-disc list-inside pb-2">
                {responsibilities.map((responsibility, index) => <li key={index}>{responsibility}</li>)}
            </ul>
            <div className={''}>{stack.join(', ')}</div>
        </div>
    );
}
