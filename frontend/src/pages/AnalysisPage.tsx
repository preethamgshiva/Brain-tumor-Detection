import { DropDown } from "./DropDown";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";

interface Patient {
  id: number;
  name: string;
  age: number;
  gender: string;
  remarks: string;
}

function AnalysisPage() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch data from the backend
    const fetchPatients = async () => {
      try {
        const response = await axios.get<Patient[]>(
          "http://localhost:5000/patients"
        );
        setPatients(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching patients:", error);
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="flex flex-row h-screen">
        <div className="flex flex-col border w-1/4 border-black p-4 text-center">
          <h1 className="text-2xl">Patient Details</h1>
          <div className="flex flex-col justify-start items-start p-2 gap-2">
            <table>
              <thead>
                <tr>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Name
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Age
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Gender
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Remarks
                  </th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient) => (
                  <tr key={patient.id}>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {patient.name}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {patient.age}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {patient.gender}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {patient.remarks}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex py-5 gap-5">
            <DropDown />
          </div>
          <div className="flex flex-col h-screen py-5">
            <div className="grid w-full max-w-sm items-center text-left gap-1.5">
              <Label htmlFor="file"> Upload Mri Scan</Label>
              <Input id="picture" type="file" />
            </div>
            <hr className="py-2" />
            <Button>Submit</Button>
            <hr className="py-2" />
            <Button>Logout</Button>
          </div>
        </div>
        <div className="flex flex-col p-4 border border-black justify-center items-center w-full">
          <h1 className="">hello</h1>
        </div>
      </div>
    </>
  );
}

export default AnalysisPage;
