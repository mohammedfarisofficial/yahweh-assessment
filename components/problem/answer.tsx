import {
   PROBLEM_ACCESS_TYPE_CAN_ANSWER,
   PROBLEM_ACCESS_TYPE_MODERATOR,
   PROBLEM_TYPE_LONG,
   PROBLEM_TYPE_MULTIPLE,
   PROBLEM_TYPE_SHORT,
   PROBLEM_TYPE_TRUE_OR_FALSE,
} from "@/app/constants/problem-type";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface PropsType {
   questiontype: string;
   questionAccesstype: string;
   answers?: string[] | [];
   correct_answer?: string;
}
const Answer = ({ questiontype, questionAccesstype, answers, correct_answer }: PropsType) => {
   if (questionAccesstype === PROBLEM_ACCESS_TYPE_CAN_ANSWER)
      return (
         <Card className="p-5">
            {questiontype === PROBLEM_TYPE_SHORT && (
               <div className="w-full p-5 flex flex-col items-start gap-2">
                  <Label>Enter answer</Label>
                  <Input placeholder="Type short answer..." />
               </div>
            )}
            {questiontype === PROBLEM_TYPE_LONG && (
               <div className="w-full p-5 flex flex-col items-start gap-2">
                  <Label>Enter answer</Label>
                  <Textarea placeholder="Type your answer here." />
               </div>
            )}
            {questiontype === PROBLEM_TYPE_MULTIPLE && (
               <div className="w-full p-5">
                  <Label>Select Correct option</Label>
                  <RadioGroup className="grid grid-cols-2 mt-3" defaultValue="option-one">
                     <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-one" id="option-one" />
                        <Label htmlFor="option-one">Improved code maintainability</Label>
                     </div>
                     <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-two" id="option-two" />
                        <Label htmlFor="option-two">Enhanced runtime performance</Label>
                     </div>
                     <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-two" id="option-two" />
                        <Label htmlFor="option-two">Static type checking</Label>
                     </div>
                     <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-two" id="option-two" />
                        <Label htmlFor="option-two">
                           Easier integration with older JavaScript code
                        </Label>
                     </div>
                     <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-two" id="option-two" />
                        <Label htmlFor="option-two">
                           Better error detection during development
                        </Label>
                     </div>
                  </RadioGroup>
               </div>
            )}
            {questiontype === PROBLEM_TYPE_TRUE_OR_FALSE && (
               <div className="w-full p-5">
                  <Label>Select Correct option</Label>
                  <RadioGroup className="grid grid-cols-2 mt-3" defaultValue="option-one">
                     <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-one" id="option-one" />
                        <Label htmlFor="option-one">True</Label>
                     </div>
                     <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-two" id="option-two" />
                        <Label htmlFor="option-two">False</Label>
                     </div>
                  </RadioGroup>
               </div>
            )}
         </Card>
      );
   if (questionAccesstype === PROBLEM_ACCESS_TYPE_MODERATOR) {
      return (
         <Card className="p-5">
            {questiontype === PROBLEM_TYPE_SHORT && (
               <div className="w-full p-5 flex flex-col items-start gap-2">
                  <Label>Enter answer</Label>
                  <Input placeholder="Type short answer..." />
               </div>
            )}
            {questiontype === PROBLEM_TYPE_LONG && (
               <div className="w-full p-5 flex flex-col items-start gap-2">
                  <Label>Enter answer</Label>
                  <Textarea placeholder="Type your answer here." />
               </div>
            )}
            {questiontype === PROBLEM_TYPE_MULTIPLE && (
               <div className="w-full p-5">
                  <Label>Options</Label>
                  {answers && !!answers.length ? (
                     <RadioGroup
                        className="grid grid-cols-2 mt-3"
                        value={correct_answer}
                        defaultValue="option-one"
                     >
                        {answers.map((answer, index) => (
                           <div key={index} className="flex items-center space-x-2">
                              <RadioGroupItem value={answer} id="option" />
                              <Label htmlFor="option-one">{answer}</Label>
                           </div>
                        ))}
                     </RadioGroup>
                  ) : (
                     <p className="text-sm text-gray-500">Add new option to display options</p>
                  )}
               </div>
            )}
            {questiontype === PROBLEM_TYPE_TRUE_OR_FALSE && (
               <div className="w-full p-5">
                  <Label>Select Correct option</Label>
                  <RadioGroup className="grid grid-cols-2 mt-3" defaultValue="option-one">
                     <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-one" id="option-one" />
                        <Label htmlFor="option-one">True</Label>
                     </div>
                     <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-two" id="option-two" />
                        <Label htmlFor="option-two">False</Label>
                     </div>
                  </RadioGroup>
               </div>
            )}
         </Card>
      );
   }
};

export default Answer;
