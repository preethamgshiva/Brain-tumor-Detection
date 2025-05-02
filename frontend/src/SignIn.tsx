import "@/styles/signIn.css";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignIn() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  // Handler for navigating to the patient details page
  //const signInHandler = (): void => {
  //navigate("/patient-details");
  //};

  // Handler for form submission
  const handleLogin = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    try {
      const response = await axios.post<{ message: string }>(
        "http://localhost:5000/login",
        {
          username,
          password,
        }
      );
      navigate("/patient-details");
      alert(response.data.message);
    } catch (error: any) {
      // Handle error typing for axios response
      alert(error.response?.data?.error || "An error occurred");
    }
  };

  // Button is disabled if username or password is empty
  const isButtonDisabled: boolean = !username || !password;

  return (
    <>
      <div className="container-signin">
        <div className="login-box">
          <h1 className="text-3xl font-bold tracking-tighter ">
            DiagnoSYS Portal
          </h1>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div className="username-input">
              <Label htmlFor="username">
                <strong>User ID:</strong>
              </Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter ID"
                required
              />
            </div>
            <div className="password-input">
              <Label htmlFor="password">
                <strong>Password:</strong>
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                required
              />
            </div>
            <div className="submit-button">
              <Button
                type="submit"
                className="login-button w-full"
                disabled={isButtonDisabled}
              >
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
