import "@/styles/patientDetails.css";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { useState, FormEvent } from "react";
import axios from "axios";

function PatientDetails() {
  const navigate = useNavigate();

  // Navigate to the sign-out page
  const signOutHandler = (): void => {
    navigate("/");
  };

  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [remarks, setRemarks] = useState<string>("");

  // Handle form submission
  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    try {
      const response = await axios.post<{ message: string }>(
        "http://localhost:5000/upload-patient",
        {
          name,
          age,
          gender,
          remarks,
        }
      );
      alert(response.data.message);
      navigate("/AnalysisPage");
      // Clear the form
      setName("");
      setAge("");
      setGender("");
      setRemarks("");
    } catch (error: any) {
      // Handle axios error
      alert(error.response?.data?.error || "An error occurred");
    }
  };

  const CancelHandler = (): void => {
    setName("");
    setAge("");
    setGender("");
    setRemarks("");
  };

  return (
    <>
      <div className="logout-button">
        <Button className="login-button w-full" onClick={signOutHandler}>
          <strong>Logout</strong>
        </Button>
      </div>
      <div className="container">
        <Card className="w-[800px]">
          <CardHeader>
            <CardTitle className="main-head">Enter Patient Details</CardTitle>
            <CardDescription className="sec-head">
              Please Enter as Mentioned in the report.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="formdiv" onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">
                    <strong>Name:</strong>
                  </Label>
                  <Input
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    value={name}
                    placeholder="Name of the Patient"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="age">
                    <strong>Age:</strong>
                  </Label>
                  <Input
                    onChange={(e) => setAge(e.target.value)}
                    id="age"
                    value={age}
                    placeholder="Age of the Patient"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5 w-1/2">
                  <Label htmlFor="gender">
                    <strong>Gender:</strong>
                  </Label>
                  <select
                    className="border border-gray-300 rounded"
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                    style={{
                      display: "block",
                      margin: "10px auto border",
                      padding: "10px",
                      width: "100%",
                    }}
                  >
                    <option value="" disabled>
                      Select Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="remarks">
                    <strong>Early remarks:</strong>
                  </Label>
                  <Textarea
                    id="remarks"
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                    placeholder="Enter your remarks here."
                    required
                  />
                </div>
              </div>
              <div className="p-4">
                <CardFooter className="flex justify-between ">
                  <Button
                    variant="outline"
                    type="button"
                    onClick={CancelHandler}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">Submit</Button>
                </CardFooter>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default PatientDetails;
