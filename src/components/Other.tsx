import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Other() {
    const people = ["Andrea", "Raffaele", "Rachael", "Christian", "Davide", "Sofia", "Marco", "Alessio A.", "Alessio B.", "Giuseppe R.", "Giuseppe S.", "Valerio", "Gabriele", "Samuele", "Gianluca", "Antonio", "Adriano", "Michelangelo", "Francesco", "Flavio"];
    const sortedPeople = people.sort();
    
    const [selectedPeople, setSelectedPeople] = useState<string[]>([]);
    
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const person = event.target.value;
        if (event.target.checked) {
            if (selectedPeople.length < 5) {
                setSelectedPeople([...selectedPeople, person]);
            } else {
                event.preventDefault();
                alert("Puoi selezionare al massimo 5 persone.");
            }
        } else {
            setSelectedPeople(selectedPeople.filter(item => item !== person));
        }
    };

    const handleSubmit = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        if (selectedPeople.length > 0) {
            // Redirect to the final page
            window.location.href = "/final";
            return true;
        } else {
            alert("Seleziona almeno una persona.");
            return false;
        }
    };
    
    return (
        <div className="flex flex-col gap-10 items-center justify-center bg-white min-h-screen">
            <h1 className="text-black text-4xl fade-in-first">Riccardo, scegli manualmente le tue preferenze (max. 5)</h1>
            <div className="grid grid-cols-3 grid-rows-4 gap-4">
                {sortedPeople.map((person, index) => (
                    <div key={index} className="flex items-center gap-3 fade-in-second">
                        <input 
                            type="checkbox" 
                            id={person} 
                            name={person} 
                            value={person} 
                            onChange={handleCheckboxChange} 
                            disabled={!selectedPeople.includes(person) && selectedPeople.length >= 10}
                        />
                        <label htmlFor={person} className="text-black text-2xl">{person}</label>
                    </div>
                ))}
            </div>
            <Link onClick={handleSubmit} to="/final" className="text-xl text-white bg-blue-500 p-4 rounded-lg transition-all hover:text-white hover:bg-blue-900 hover:scale-110 fade-in-third">Invia</Link>
        </div>
    );
}
