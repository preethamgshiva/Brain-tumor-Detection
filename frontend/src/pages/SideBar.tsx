import "@/styles/SideBar.css";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

function SideBar() {
  return (
    <div className="container-sidebar">
      <Card
        className="w-[350px] h-screen"
        style={{ height: "calc(90vh - 50px)" }}
      >
        <CardHeader>
          <CardTitle>DiagnoSYS Portal</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">
                  <strong>Name: </strong>
                </Label>
                //return Patient Name
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="age">
                  <strong>Age: </strong>
                </Label>
                //return Patient Age
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">
                  <strong>Gender: </strong>
                </Label>
                //return Patient Gender
              </div>
            </div>
          </form>
        </CardContent>
        <div className="bottom-align">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="framework">Framework</Label>
            <Select>
              <SelectTrigger id="framework">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="a">Brain Tumor Segmentation</SelectItem>
                <SelectItem value="b">Skin Cancer Segmenter</SelectItem>
                <SelectItem value="c">Sleep Apnea Detector</SelectItem>
                <SelectItem value="d">Drug-response</SelectItem>
              </SelectContent>
            </Select>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="picture">Upload Mri:</Label>
              <Input id="picture" type="file" />
            </div>
          </div>
        </div>
      </Card>
      <CardFooter className="flex-row justify-between">
        <div className="bottom-align">
          <Button variant="outline">Cancel</Button>
        </div>
        <Button>Deploy</Button>
      </CardFooter>
    </div>
  );
}

export default SideBar;
