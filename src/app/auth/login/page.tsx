'use client';

import { useParams } from "next/navigation";

export default function KelasPage() {
    const { id } = useParams();
    return(
        
        <div>
            <h1>test kelas {id}</h1>
            <h2>test kelas</h2>
        </div>
    );
}